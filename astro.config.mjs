// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// Change SITE_URL in Cloudflare Pages (Settings → Variables) once the domain is live.
const site = process.env.SITE_URL || 'https://tai-website.pages.dev'

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', sw: 'sw' },
      },
    }),
  ],
})
