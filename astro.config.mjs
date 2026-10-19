// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// The public web address. On Vercel it is picked up automatically from the project's
// production domain; set SITE_URL in Vercel only if you need to override it.
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL
const site =
  process.env.SITE_URL || (vercelDomain ? `https://${vercelDomain}` : 'http://localhost:4321')

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
