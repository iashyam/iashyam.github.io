import { existsSync, readdirSync } from "node:fs";
import { resolve as resolvePath } from "node:path";

import { parse } from "yaml";
import type { Plugin } from "vite";
import type { ZodError } from "zod";

import { contentSchema, type ContentData } from "../src/content/schema";

const CONTENT_FILE = /content\.yml$/;
const PRODUCT_IMAGE_DIR = "src/assets/products";
const PROJECT_IMAGE_DIR = "src/assets/projects";

function describeIssues(error: ZodError): string {
  return error.issues
    .map((issue) => `  ${issue.path.join(".") || "(root)"}: ${issue.message}`)
    .join("\n");
}

function filesIn(root: string, directory: string): Set<string> {
  const path = resolvePath(root, directory);
  return existsSync(path) ? new Set(readdirSync(path)) : new Set();
}

/** Image names that content.yml references but which are not on disk. */
function missingImages(
  content: ContentData,
  root: string,
): { directory: string; names: string[]; available: Set<string> }[] {
  const checks = [
    {
      directory: PRODUCT_IMAGE_DIR,
      names: content.products.map((product) => product.image),
    },
    {
      directory: PROJECT_IMAGE_DIR,
      names: content.projects
        .map((project) => project.image)
        .filter((name): name is string => name !== undefined),
    },
  ];

  return checks
    .map(({ directory, names }) => {
      const available = filesIn(root, directory);
      return {
        directory,
        available,
        names: names.filter((name) => !available.has(name)),
      };
    })
    .filter((check) => check.names.length > 0);
}

/**
 * Parses and validates content.yml, then emits it as a data module.
 *
 * Validation lives here rather than in the app so that invalid content fails
 * `vite build` and shows up in the dev overlay on save, and so zod stays out
 * of the browser bundle entirely.
 */
export function contentPlugin(root = process.cwd()): Plugin {
  return {
    name: "site-content",
    transform(code, id) {
      if (!CONTENT_FILE.test(id)) return null;

      const result = contentSchema.safeParse(parse(code));
      if (!result.success) {
        this.error(`content.yml is invalid:\n${describeIssues(result.error)}`);
      }

      // Image names resolve to real assets only at build time, so check them
      // here instead of rendering a broken image.
      const missing = missingImages(result.data, root);
      if (missing.length > 0) {
        const detail = missing
          .map(
            ({ directory, names, available }) =>
              `  ${directory}/ is missing: ${names.join(", ")}` +
              ` (available: ${[...available].join(", ") || "none"})`,
          )
          .join("\n");
        this.error(
          `content.yml references images that do not exist:\n${detail}`,
        );
      }

      return {
        code: `export default ${JSON.stringify(result.data)};\n`,
        map: null,
      };
    },
  };
}
