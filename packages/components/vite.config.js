import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  build: {
    minify: true,
    outDir: "./dist",
    rollupOptions: {
      external: [
        "@react-input/mask",
        "@remix-run/react",
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
