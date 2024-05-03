import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "./dist",
    rollupOptions: {
      output: { format: "esm" },
      external: [
        "@react-input/mask",
        "@remix-run/react",
        "framer-motion",
        "lucide-react",
        "react",
        "react-dom",
      ],
    },
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@arkyn/components",
      fileName: "bundle",
    },
  },
});
