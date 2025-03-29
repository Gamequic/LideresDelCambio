import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://lideresdelcambio.org',
      urls: [
        {
          url: '/',
          changefreq: 'weekly',
          priority: 1.0,
        },
      ],
    }),

  ],
  base: '/',
})
