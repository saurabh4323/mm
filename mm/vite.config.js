// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ["some-external-library"], // Adjust this list based on your dependencies
    },
  },
};
