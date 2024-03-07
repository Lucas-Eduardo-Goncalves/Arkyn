import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import wyw from "@wyw-in-js/vite";
import { remixDevTools } from "remix-development-tools/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    process.env.NODE_ENV === "development" && remixDevTools(),
    remix(),
    wyw(),
  ],
});
