import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { campaignStoreURLs } from '../src/lib/campaign-links.mjs'

const root = new URL('../dist/', import.meta.url).pathname
const appleProductPageId = 'a8cbf41a-f2c2-4620-9142-4be86d24d96b'
const routes = {
  meta_guess: {source: 'meta', medium: 'paid_social', campaign: 'meta_guess'},
  meta_between: {source: 'meta', medium: 'paid_social', campaign: 'meta_between'},
  meta_heard: {source: 'meta', medium: 'paid_social', campaign: 'meta_heard'},
  meta_audio_round_v1: {source: 'meta', medium: 'paid_social', campaign: 'meta_audio_round_v1'},
  ig_one_round_20260928: {source: 'instagram', medium: 'organic_social', campaign: 'one_useful_round_20260928', content: 'reel_bio'},
  partner_one_round_20260928: {source: 'partner_share', medium: 'organic_social', campaign: 'one_useful_round_20260928', content: 'partner_share'},
}

for (const [token, attribution] of Object.entries(routes)) {
  const html = readFileSync(join(root, 'get', token, 'index.html'), 'utf8')
  const link = label => {
    const match = html.match(new RegExp(`href="([^"]+)" aria-label="Get Dee on ${label}"`))
    assert(match, `${token}: missing ${label} link`)
    return new URL(match[1].replaceAll('&amp;', '&'))
  }
  const apple = link('the App Store')
  const play = link('Google Play')

  assert.equal(apple.hostname, 'apps.apple.com')
  assert.equal(apple.pathname, '/app/id6788483296')
  assert.equal(apple.searchParams.get('pt'), '125910193')
  assert.equal(apple.searchParams.get('ct'), token)
  assert.equal(apple.searchParams.get('ppid'), appleProductPageId)
  assert.equal(play.hostname, 'play.google.com')
  assert.equal(play.pathname, '/store/apps/details')
  assert.equal(play.searchParams.get('id'), 'dev.nowham.dee')
  assert.match(play.search, /referrer=utm_source%3D[^&]+%26utm_medium%3D[^&]+%26utm_campaign%3D/)
  const referrer = new URLSearchParams(play.searchParams.get('referrer'))
  assert.equal(referrer.get('utm_source'), attribution.source)
  assert.equal(referrer.get('utm_medium'), attribution.medium)
  assert.equal(referrer.get('utm_campaign'), attribution.campaign)
  assert.equal(referrer.get('utm_content'), attribution.content ?? null)

  const expected = campaignStoreURLs({token, ...attribution})
  assert.equal(apple.toString(), expected.appStoreURL)
  assert.equal(play.toString(), expected.googlePlayURL)
  assert.match(html, /\/badges\/app-store\.svg/)
  assert.match(html, /\/badges\/google-play\.svg/)
}
console.log(`Passed: ${Object.keys(routes).length} campaign routes, Apple campaign/CPP links and encoded Google Play UTM referrers.`)
