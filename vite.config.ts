import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative base so built asset URLs resolve correctly whether this is
  // deployed at the domain root (a user/org GitHub Pages site) or under a
  // subpath (a project GitHub Pages site, e.g. <user>.github.io/<repo>/).
  base: "./",
  plugins: [react()],
});
