import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "./dist",
    rollupOptions: {
      output: { format: "esm" },
      external: [
        "@arkyn/types",
        "@remix-run/react",
        "framer-motion",
        "lucide-react",
        "react",
        "react-dom",
        "react-input-mask",
      ],
    },
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@arkyn/components",
      fileName: "bundle",
    },
  },
});
