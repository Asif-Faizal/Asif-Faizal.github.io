import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

/**
 * Vite config for GitHub Pages deployment
 * Set base to '/flutter-portfolio/' (your repo name)
 */
export default defineConfig({
  base: '/flutter-portfolio/',
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
