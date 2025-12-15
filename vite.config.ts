import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large dependencies into separate chunks
          "vendor-react": ["react", "react-dom"],
          "vendor-ui": ["lucide-react"],
          "vendor-html2canvas": ["html2canvas"],
        },
      },
    },
    // Warn only if chunks exceed 700 kB (instead of 500 kB default)
    chunkSizeWarningLimit: 700,
  },
}));
