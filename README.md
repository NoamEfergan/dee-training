# dee.training

The public website for **Dee: Muay Thai Coach**. It contains the product site, seven localized landing pages, privacy policy, terms, support, and the App Clip landing route.

## Optional email policy

`src/pages/privacy.mdx` describes optional native Dee updates through a Cloudflare
collector and Kit, including consent, retry, unsubscribe and deletion boundaries.
This site currently has no newsletter signup form. Native implementation and
collector operations live in the Dee app repository. Validate policy changes with
`npm run test:links` (includes the Astro check and build). Publication is separate
from app or backend deployment.

## Local development

```sh
npm install
npm run dev
```

## Publishing

Pushes to `main` build and deploy the site with GitHub Pages. The Pages custom domain is `dee.training`.

The DNS zone should contain GitHub Pages' four apex `A` records and a `www` CNAME pointing to `noamefergan.github.io`. The App Clip association file is published at `/.well-known/apple-app-site-association`; switching the App Clip invocation domain also requires the matching associated-domain entitlement and App Store Connect configuration in an app release.
