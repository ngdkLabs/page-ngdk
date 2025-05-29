import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vitePluginInjectDataLocator from "./plugins/vite-plugin-inject-data-locator";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginInjectDataLocator()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 5176, // Explicitly set port (optional, since 5176 is your current port)
  },
});