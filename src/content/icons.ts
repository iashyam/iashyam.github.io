import {
  Binary,
  Bot,
  Box,
  Braces,
  Brain,
  Cloud,
  Container,
  Database,
  FileCode2,
  GitBranch,
  Layers,
  Network,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import type { IconName } from "./icon-names";

// An allowlist, not a barrel import: `import * as lucide` to look icons up by
// name would pull ~1,000 components into the bundle. To add an icon, add its
// name to ICON_NAMES and the component here — `satisfies` fails the build if
// the two ever disagree.
export const icons = {
  Binary,
  Bot,
  Box,
  Braces,
  Brain,
  Cloud,
  Container,
  Database,
  FileCode2,
  GitBranch,
  Layers,
  Network,
  TrendingUp,
  Workflow,
} satisfies Record<IconName, LucideIcon>;
