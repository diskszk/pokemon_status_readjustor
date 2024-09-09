/// <reference types="vitest" />

import { cwd } from "node:process";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      plugins: [["@swc/plugin-emotion", {}]],
    }),
    tsconfigPaths({
      root: cwd(),
    }),
  ],
  test: {
    includeSource: ["src/**/*.{js,ts}"],
    globals: true,
  },
});
