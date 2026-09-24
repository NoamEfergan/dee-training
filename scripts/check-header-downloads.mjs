import assert from 'node:assert/strict'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const dist = new URL('../dist/', import.meta.url).pathname

function htmlFiles(directory) {
  return readdirSync(directory).flatMap(name => {
    const path = join(directory, name)
    return statSync(path).isDirectory() ? htmlFiles(path) : path.endsWith('.html') ? [path] : []
  })
}

function headerStoreLinks(html, page) {
  const markedHeaders = [...html.matchAll(/<header\b([^>]*)>([\s\S]*?)<\/header>/gi)]
    .filter(([, attributes]) => /\bdata-download-header\b/.test(attributes))
  assert.equal(markedHeaders.length, 1, `${page}: expected one download header`)
  const firstMain = html.search(/<main\b/i)
  assert(firstMain < 0 || markedHeaders[0].index < firstMain, `${page}: download header must precede the page content`)

  const anchors = [...markedHeaders[0][2].matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)]
    .map(([, attributes, contents]) => {
      const href = /\bhref="([^"]+)"/i.exec(attributes)?.[1]
      const imageSources = [...contents.matchAll(/<img\b([^>]*)>/gi)]
        .map(([, imageAttributes]) => /\bsrc="([^"]+)"/i.exec(imageAttributes)?.[1])
        .filter(Boolean)
      return href ? { url: new URL(href.replaceAll('&amp;', '&'), 'https://dee.training'), label: `${attributes} ${contents}`, imageSources } : null
    })
    .filter(Boolean)

  const apple = anchors.filter(({ url }) => url.hostname === 'apps.apple.com')
  const play = anchors.filter(({ url }) => url.hostname === 'play.google.com')
  assert.equal(apple.length, 1, `${page}: expected one App Store button in the top bar`)
  assert.equal(play.length, 1, `${page}: expected one Google Play button in the top bar`)
  assert(apple[0].imageSources.includes('/badges/app-store.svg'), `${page}: App Store top-bar link must contain the official badge image`)
  assert(play[0].imageSources.includes('/badges/google-play.svg'), `${page}: Google Play top-bar link must contain the official badge image`)
  assert.match(apple[0].label, /App Store/i, `${page}: App Store button needs a readable label`)
  assert.match(play[0].label, /Google Play/i, `${page}: Google Play button needs a readable label`)
  assert.equal(apple[0].url.protocol, 'https:', `${page}: App Store link must use HTTPS`)
  assert.equal(apple[0].url.pathname, '/app/id6788483296', `${page}: incorrect App Store app`)
  assert.equal(play[0].url.protocol, 'https:', `${page}: Google Play link must use HTTPS`)
  assert.equal(play[0].url.pathname, '/store/apps/details', `${page}: incorrect Google Play route`)
  assert.equal(play[0].url.searchParams.get('id'), 'dev.nowham.dee', `${page}: incorrect Google Play app`)
  return { apple: apple[0].url, play: play[0].url }
}

function checkCampaignAttribution(page, apple, play) {
  const campaign = page.match(/^get\/(meta_(?:guess|between|heard|audio_round_v1))\/index\.html$/)?.[1]
  const expected = campaign
    ? { token: campaign, source: 'meta', medium: 'paid_social', campaign }
    : page === 'solo-muay-thai-workout/index.html'
      ? { token: 'site_solo_workout_20260924', source: 'dee_training', medium: 'organic_web', campaign: 'solo_muay_thai_workout' }
      : null
  if (!expected) return

  assert.equal(apple.searchParams.get('pt'), '125910193', `${page}: top bar lost the Apple provider token`)
  assert.equal(apple.searchParams.get('ct'), expected.token, `${page}: top bar lost campaign attribution`)
  assert.equal(apple.searchParams.get('ppid'), 'a8cbf41a-f2c2-4620-9142-4be86d24d96b', `${page}: top bar lost the custom product page`)

  const referrer = play.searchParams.get('referrer')
  assert(referrer, `${page}: top bar lost the Google Play install referrer`)
  const attribution = new URLSearchParams(referrer)
  assert.equal(attribution.get('utm_source'), expected.source, `${page}: wrong Play source`)
  assert.equal(attribution.get('utm_medium'), expected.medium, `${page}: wrong Play medium`)
  assert.equal(attribution.get('utm_campaign'), expected.campaign, `${page}: wrong Play campaign`)
}

const pages = htmlFiles(dist)
assert(pages.length > 0, 'No rendered HTML pages found; build the site first')
for (const badge of ['app-store.svg', 'google-play.svg']) {
  assert(statSync(join(dist, 'badges', badge)).isFile(), `Missing built store badge: ${badge}`)
}
const redirectPages = new Set(['PrivacyPolicy/index.html', 'TermsAndConditions/index.html'])
let redirects = 0
for (const path of pages) {
  const page = relative(dist, path)
  const html = readFileSync(path, 'utf8')
  if (redirectPages.has(page)) {
    assert.match(html, /<meta\b[^>]*http-equiv="refresh"/i, `${page}: expected a redirect-only page`)
    redirects += 1
    continue
  }
  const { apple, play } = headerStoreLinks(html, page)
  checkCampaignAttribution(page, apple, play)
}

console.log(`Passed: both official store badge images appear in the top-bar links on all ${pages.length - redirects} content pages; ${redirects} redirects skipped; campaign routes retain attribution.`)
