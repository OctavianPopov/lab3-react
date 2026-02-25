import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pagini": path.resolve(__dirname, "./src/pagini"),
      "@componente": path.resolve(__dirname, "./src/componente"),
      "@date": path.resolve(__dirname, "./src/date"),
    },
  },
});