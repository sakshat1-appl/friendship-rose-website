import { defineConfig } from "vite";

export default defineConfig({
  // Static site - no framework plugin needed
  // Keep index.html as entry
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
