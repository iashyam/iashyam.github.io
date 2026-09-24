import data from "../../content.yml";

import { productImages, projectImages } from "./assets";
import { icons } from "./icons";
import type { ContentData } from "./schema";

// content.yml arrives already parsed and validated by tools/content-plugin.ts,
// so this module only resolves the fields that name something in code: an
// image asset and a skill's lucide icon.
const validated = data as ContentData;

function imageUrl(
  fileName: string,
  urls: Record<string, string>,
  directory: string,
): string {
  const url = urls[fileName];
  if (url === undefined) {
    throw new Error(
      `content.yml references "${fileName}", which is not in ${directory}. ` +
        `Available: ${Object.keys(urls).join(", ") || "(none)"}`,
    );
  }
  return url;
}

export const content = {
  products: validated.products.map((product) => ({
    ...product,
    image: imageUrl(product.image, productImages, "src/assets/products/"),
  })),
  projects: validated.projects.map((project) => ({
    ...project,
    ...(project.image !== undefined && {
      image: imageUrl(project.image, projectImages, "src/assets/projects/"),
    }),
  })),
  skills: validated.skills.map((group) => ({
    ...group,
    items: group.items.map((skill) => ({ ...skill, icon: icons[skill.icon] })),
  })),
};

export type Content = typeof content;
export type Product = Content["products"][number];
export type Project = Content["projects"][number];
export type SkillGroup = Content["skills"][number];
