import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/multiLineGraph-tool/",
  build: {
    // Limit chunk size warnings to avoid warnings for large libraries
    chunkSizeWarningLimit: 1000, // Increase this if your build size is larger than 500 kB

    rollupOptions: {
      // Manual chunking to optimize chunk size for large dependencies
      output: {
        manualChunks: {
          // Split React and ReactDOM into separate chunks for better caching
          react: ["react", "react-dom"],
          // Additional chunks can be created here for other large libraries
          recharts: ["recharts"],
        },
      },
    },
  },
});
