import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

/// <reference types="vitest" /> // Esto es opcional pero ayuda al autocompletado

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },
  test: {
    globals: true,           // permite usar describe, test, expect sin importarlos
    environment: "jsdom",    // simula navegador
    setupFiles: "./src/setupTests.js", // archivo opcional para configuraciones globales
  },
});