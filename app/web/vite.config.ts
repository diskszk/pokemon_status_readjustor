/// <reference types="vitest" />

import { cwd } from "node:process";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      root: cwd(),
    }),
    TanStackRouterVite(),
  ],
  test: {
    includeSource: ["src/**/*.{js,ts}"],
    globals: true,
    environment: "happy-dom",
    setupFiles: "./vitest.setup.ts",
  },
});
