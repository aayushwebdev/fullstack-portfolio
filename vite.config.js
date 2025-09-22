import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or @vitejs/plugin-vue if using Vue

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // or vue() if using Vue
    // Remove any @tailwindcss/vite imports - not needed for v3
  ],
  css: {
    postcss: './postcss.config.js', // This handles Tailwind v3
  },
})