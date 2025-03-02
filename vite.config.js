import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    open: true,
    port: 3000
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
