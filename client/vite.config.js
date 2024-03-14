import react from "@vitejs/plugin-react";
import path from "path";
import { URL } from "url";
import { defineConfig } from "vite";

const __dirname = new URL(".", import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
