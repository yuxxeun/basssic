import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://basssic.vercel.app',
  prefetch: true,
  integrations: [react(), tailwind(), sitemap()],
  output: 'server',
  adapter: vercel({
    webAnalytics: true
  })
})
