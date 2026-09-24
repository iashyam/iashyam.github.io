import { z } from "zod";

import { ICON_NAMES } from "./icon-names";
import { PROJECT_CATEGORIES } from "./categories";

// Runs in Node only — tools/content-plugin.ts validates content.yml at build
// time, so zod never reaches the browser bundle. Import the *types* from here
// freely; importing the schema value pulls zod in.

// Every object is strict, so a typo'd or stale key in content.yml is an error
// instead of silently ignored content.
const obj = <T extends z.ZodRawShape>(shape: T) => z.object(shape).strict();

const text = z.string().min(1);

// A file name; the build-time validator checks it exists in the right
// directory, and src/content/index.ts maps it to the built URL.
const imageFile = text;

// Every project links to its source. Narrower than a plain URL so a profile
// link or a typo'd host is caught rather than shipped as a dead card link.
const GITHUB_REPO_URL = /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+$/;
const repoUrl = z
  .string()
  .url()
  .regex(
    GITHUB_REPO_URL,
    "must be a GitHub repository URL, e.g. https://github.com/owner/repo",
  );

export const contentSchema = obj({
  products: z.array(
    obj({
      name: text,
      url: z.string().url(),
      description: text,
      tags: z.array(text),
      image: imageFile,
    }),
  ),
  projects: z.array(
    obj({
      title: text,
      description: text,
      categories: z.array(z.enum(PROJECT_CATEGORIES)).nonempty(),
      repo: repoUrl,
      // Optional: a project with no image gets a lettered placeholder.
      image: imageFile.optional(),
    }),
  ),
  skills: z.array(
    obj({
      label: text,
      items: z.array(obj({ name: text, icon: z.enum(ICON_NAMES) })).nonempty(),
    }),
  ),
});

/** content.yml exactly as written, after validation. */
export type ContentData = z.output<typeof contentSchema>;
