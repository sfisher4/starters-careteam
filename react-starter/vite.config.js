import { defineConfig } from "vite";
import react from "react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/summary": "https://api.covid19tracker.ca",
    },
  },
  plugins: [react()],
});
