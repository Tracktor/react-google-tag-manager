import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";
import { name, dependencies, peerDependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      fileName: "[name]",
      name,
    },
    rollupOptions: {
      external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
      output: {
        globals: {
          "@tracktor/react-utils": "reactUtils",
          react: "React",
        },
      },
    },
  },
  plugins: [dts(), react()],
  publicDir: false,
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "~", replacement: resolve(__dirname) },
    ],
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "/test.config.ts",
  },
});
