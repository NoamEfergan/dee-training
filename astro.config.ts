import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://dee.training',
  integrations: [mdx(), sitemap({
    // Paid landing pages are noindex; the legacy legal URLs only redirect.
    filter: (page) => !/^\/(?:get\/|PrivacyPolicy\/?$|TermsAndConditions\/?$)/.test(new URL(page).pathname),
  })],
})
