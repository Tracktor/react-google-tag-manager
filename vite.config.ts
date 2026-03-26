import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "unplugin-dts/vite";
import { defineConfig, UserConfig as UserConfigVite } from "vite";
import { UserConfig as InlineConfigVitest } from "vitest/config";
import { dependencies, name, peerDependencies } from "./package.json";

type UserConfig = UserConfigVite & {
  test: InlineConfigVitest["test"];
};

const config: UserConfig = {
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      fileName: "[name]",
      name,
    },
    rolldownOptions: {
      external: [...Object.keys(dependencies), ...Object.keys(peerDependencies), "react/jsx-runtime", "react/jsx-dev-runtime"],
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
};


export default defineConfig(config);
