import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

/// <reference types="vitest" />

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },

  // Importante: define la base de tu SPA
  base: "/personajes/",

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});