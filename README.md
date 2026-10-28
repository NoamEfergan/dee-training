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
python3 -m pip install -r scripts/requirements-press.txt
npm run dev
```

## Publishing

Pushes to `main` build and deploy the site with GitHub Pages. The Pages custom domain is `dee.training`.

`npm run build` regenerates the press fact sheet, editorial text, asset manifest
and ZIP from `src/content/press.json` before building the site. These generated
downloads are not checked into Git. Use `npm run build:press` to regenerate and
validate them on their own. The ZIP includes only public press assets, including
the Duo and Reaction Rounds supplements; videos and original captures are kept.

The DNS zone should contain GitHub Pages' four apex `A` records and a `www` CNAME pointing to `noamefergan.github.io`. The App Clip association file is published at `/.well-known/apple-app-site-association`; switching the App Clip invocation domain also requires the matching associated-domain entitlement and App Store Connect configuration in an app release.
