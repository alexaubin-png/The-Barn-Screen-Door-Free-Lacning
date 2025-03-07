import { defineConfig } from 'vite';

export default defineConfig({
  root: './public', // This points Vite to the public directory
  build: {
    outDir: '../dist', // Set the output directory (relative to the public directory)
  },
});
