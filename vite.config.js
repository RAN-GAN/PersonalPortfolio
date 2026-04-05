import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/PersonalPortfolio/",
  server: {
    proxy: {
      "/api/now-playing": {
        target: "https://curly-pine-356e.pradeepmojo1708.workers.dev",
        changeOrigin: true,
        secure: true,
        rewrite: () => "/",
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});
