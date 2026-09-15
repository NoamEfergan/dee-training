# Maintaining the Dee press kit

`src/content/press.json` is the editorial source for the page, full text download, screenshot captions, video caption tracks and fact-sheet content. The media is in `public/press/`. Private release evidence, diagnostics and correspondence belong in the app repository’s `docs/dee-press-kit-2026-09-15/`, never in this website’s public tree.

## Copy and downloads

1. Refresh the released-app facts and update `src/content/press.json`.
2. Prepare the site’s existing Barlow fonts as TTF: `python scripts/prepare-press-fonts.py --output /tmp/dee-press-fonts` (requires `fonttools[woff]`). This also outlines the existing typographic wordmark.
3. Run `DEE_PRESS_FONT_DIR=/tmp/dee-press-fonts python scripts/build-press-downloads.py` (requires `reportlab`, `pypdf`, `Pillow`). It writes a two-page PDF, complete editorial text, caption tracks, checksummed asset manifest and deterministic ZIP.
4. Render the PDF with Poppler and inspect both pages after copy changes. The script rejects content that crosses its footer boundary.
5. Run `npm run build`, `node scripts/check-site.mjs`, `node scripts/check-web-analytics.mjs` and `node scripts/check-press.mjs`.

## Video

The separate `scripts/press-video/` package pins the Remotion version used to render these files. It is excluded from the Astro TypeScript project. Install its dependencies separately; do not add Remotion to the website runtime.

From that directory, use `npx remotion render index.tsx DeeOverview ../../public/press/video/dee-overview.mp4 --public-dir=../../public`. The other composition IDs are `DeeWatch` and `DeeAccessibility`. Durations are 30, 24 and 20 seconds. `remotion still` generates poster/presentation images. Rebuild downloads after any media change so checksums and ZIP contents agree.

The overview includes an owned Dee preparation voice cue. The Watch clip uses a preloaded standalone-workout fixture, not a recording of a physical pairing. The accessibility clip is a visual tour, not a VoiceOver audio recording. Preserve those distinctions in captions.

## Publication

Push reviewed changes to `main` through the existing GitHub Pages workflow. Keep the `PUBLIC_DEE_WEB_INGEST_KEY` Actions secret and the existing analytics privacy controls. Verify the public page, PDF, ZIP, caption and image/video URLs after deployment. No email sending or App Store metadata changes are part of this pipeline.
