# dee.training

The public website for **Dee: Muay Thai Coach**. It contains the product site, seven localized landing pages, privacy policy, terms, support, and the App Clip landing route.

## Local development

```sh
npm install
npm run dev
```

## Publishing

Pushes to `main` build and deploy the site with GitHub Pages. The Pages custom domain is `dee.training`.

The DNS zone should contain GitHub Pages' four apex `A` records and a `www` CNAME pointing to `noamefergan.github.io`. The App Clip association file is published at `/.well-known/apple-app-site-association`; switching the App Clip invocation domain also requires the matching associated-domain entitlement and App Store Connect configuration in an app release.
