import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = new URL('../dist/', import.meta.url).pathname
const readPage = path => readFileSync(join(dist, path, 'index.html'), 'utf8')

function storeLink(html, label) {
  const match = html.match(new RegExp(`href="([^"]+)" aria-label="Get Dee on ${label}"`))
  assert(match, `Missing ${label} store link`)
  return new URL(match[1].replaceAll('&amp;', '&'))
}

function checkStoreLinks(path, attribution) {
  const html = readPage(path)
  const apple = storeLink(html, 'the App Store')
  const play = storeLink(html, 'Google Play')

  assert.equal(apple.hostname, 'apps.apple.com')
  assert.equal(apple.pathname, '/app/id6788483296')
  assert.equal(apple.searchParams.get('pt'), '125910193')
  assert.equal(apple.searchParams.get('ct'), attribution.token)
  assert.equal(apple.searchParams.get('ppid'), 'a8cbf41a-f2c2-4620-9142-4be86d24d96b')

  assert.equal(play.hostname, 'play.google.com')
  assert.equal(play.pathname, '/store/apps/details')
  assert.equal(play.searchParams.get('id'), 'dev.nowham.dee')
  assert.match(play.search, /referrer=utm_source%3D[^&]+%26utm_medium%3D[^&]+%26utm_campaign%3D/)
  const referrer = new URLSearchParams(play.searchParams.get('referrer'))
  assert.equal(referrer.get('utm_source'), attribution.source)
  assert.equal(referrer.get('utm_medium'), attribution.medium)
  assert.equal(referrer.get('utm_campaign'), attribution.campaign)
}

for (const token of ['meta_guess', 'meta_between', 'meta_heard', 'meta_audio_round_v1']) {
  checkStoreLinks(`get/${token}`, {token, source: 'meta', medium: 'paid_social', campaign: token})
}

checkStoreLinks('solo-muay-thai-workout', {
  token: 'site_solo_workout_20260924',
  source: 'dee_training',
  medium: 'organic_web',
  campaign: 'solo_muay_thai_workout',
})

const guide = readPage('solo-muay-thai-workout')
assert.match(guide, /<h1 id="guide-title">A 20-minute solo/)
assert.match(guide, /class="guide-text-link" href="#with-dee">Get Dee/)
assert.match(guide, /class="guide-hero__product"/)
assert.match(guide, /<link rel="canonical" href="https:\/\/dee\.training\/solo-muay-thai-workout\/"/)
assert.doesNotMatch(guide, /<meta name="robots" content="noindex/)
assert.match(readPage(''), /href="\/solo-muay-thai-workout\/"/)
assert.match(readFileSync(join(dist, 'sitemap-0.xml'), 'utf8'), /https:\/\/dee\.training\/solo-muay-thai-workout\//)

console.log('Passed: four existing campaign routes and the solo guide have attributed store links; guide is indexable and linked.')
