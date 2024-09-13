import { defineConfig } from "vite";

export default defineConfig({
  // No need to specify root if it's just working from the project root
  build: {
    outDir: "dist", // you can keep this to define output directory if needed
    emptyOutDir: true, // Clears the output directory before each build
  },
});
