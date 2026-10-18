import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Deployed as a GitHub user site (rubem-dias.github.io) → served from root.
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
  },
})
