import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    open: '/'
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096
  }
})