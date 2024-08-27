// vite.config.js
import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      // Make sure to correctly configure external dependencies if needed
      external: ["react", "react-dom"],
    },
  },
};
