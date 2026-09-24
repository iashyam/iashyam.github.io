// Project filter buttons, in the order they appear. A project category in
// content.yml that is not listed here fails the build.
export const PROJECT_CATEGORIES = [
  "Machine Learning",
  "Computer Vision",
  "NLP",
  "Data Engineering",
] as const;

export const ALL_PROJECTS_LABEL = "All";

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
