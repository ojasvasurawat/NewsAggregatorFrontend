import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path' 

export default defineConfig({
  server: {
    historyApiFallback: true, // This ensures that any non-file requests fallback to index.html
  },
  build: {
    outDir: 'dist', // Ensure your build outputs to the 'dist' directory
  },
  base: '/', // This sets the base path for your app. Adjust if necessary.
  plugins: [
    react(),
    tailwindcss(),],
    resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
})
