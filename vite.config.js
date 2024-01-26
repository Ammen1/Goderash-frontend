import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// vite.config.js or vite.config.ts

import ReactRefreshPlugin from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [ReactRefreshPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000, // Change the port to 3001 or any other desired port
  },
  assetsInclude: /\.(png|jpe?g|gif|svg)$/i,
});
