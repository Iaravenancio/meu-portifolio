// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static / SPA build for Netlify: the app shell and "/" are prerendered to
// plain HTML files; no server runtime is needed at hosting time.
export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
    spa: {
      enabled: true,
    },
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },

  // No server runtime: output is plain static files in dist/client.
  nitro: false,
});
