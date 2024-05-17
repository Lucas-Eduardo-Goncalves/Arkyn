import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { config } from "dotenv";
import { remixDevTools } from "remix-development-tools";
import { defineConfig } from "vite";

import wyw from "@wyw-in-js/vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();
config({ path: "./env" });

export default defineConfig({
  plugins: [
    wyw(),
    process.env.NODE_ENV === "development" && remixDevTools(),
    remix(),
    tsconfigPaths(),
  ],
});
