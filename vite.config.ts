import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'docs', assetsDir: 'assets', sourcemap: false, cssCodeSplit: true, rollupOptions: { output: { manualChunks: undefined } } }
})
