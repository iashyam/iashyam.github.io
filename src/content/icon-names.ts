// Plain strings, no lucide import: the content schema must be loadable in
// Node (by the build-time validator in tools/content-plugin.ts) without
// dragging React components in.
export const ICON_NAMES = [
  "Binary",
  "Bot",
  "Box",
  "Braces",
  "Brain",
  "Cloud",
  "Container",
  "Database",
  "FileCode2",
  "GitBranch",
  "Layers",
  "Network",
  "TrendingUp",
  "Workflow",
] as const;

export type IconName = (typeof ICON_NAMES)[number];
