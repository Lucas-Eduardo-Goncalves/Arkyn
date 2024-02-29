import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "./dist",
    rollupOptions: {
      external: ["react", "react-dom", "lucide-react"],
      output: { format: "esm" },
    },
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@arkyn/types",
      fileName: "bundle",
    },
  },
});
