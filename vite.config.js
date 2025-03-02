import { defineConfig } from 'vite';

export default defineConfig({
  base: '/threejs-ai/',
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
