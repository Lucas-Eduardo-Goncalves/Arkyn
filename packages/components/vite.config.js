import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    minify: true,
    outDir: "./dist",
    ssr: true,
    rollupOptions: {
      external: [
        "@react-input/mask",
        "react-router",
        "framer-motion",
        "lucide-react",
        "react",
        "react-dom",
      ],
      output: { format: "esm" },
    },
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@arkyn/components",
      fileName: "bundle",
    },
  },
});
