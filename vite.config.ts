// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { contentPlugin } from "./tools/content-plugin";

export default defineConfig({
  // Parses + validates content.yml and emits it as data. Build-time only:
  // nothing from the validator reaches the bundle.
  vite: { plugins: [contentPlugin()] },
  // Prerender leaves handles open, so the build process never exits on its own.
  buildExitWatchdog: { enabled: true, graceMs: 5000 },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: { enabled: true, crawlLinks: true },
  },
});
