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

checkStoreLinks('get/nikita', {token: 'creator_nikita', source: 'instagram', medium: 'creator', campaign: 'creator_nikita'})
const creatorPage = readPage('get/nikita')
assert.match(creatorPage, /href="https:\/\/apps\.apple\.com\/redeem\?ctx=offercodes&amp;id=6788483296&amp;code=NIKITA"/)
assert.match(creatorPage, /Valid until 3 May 2027\./)
assert.match(creatorPage, /<meta name="robots" content="noindex/)

checkStoreLinks('get/liam', {token: 'creator_liam', source: 'instagram', medium: 'creator', campaign: 'creator_liam'})
const liamPage = readPage('get/liam')
assert.match(liamPage, /href="https:\/\/apps\.apple\.com\/redeem\?ctx=offercodes&amp;id=6788483296&amp;code=LIAM"/)
assert.match(liamPage, /For Liam Nolan(&#39;|')s students/)
checkStoreLinks('get/tiernan', {token: 'creator_tiernan', source: 'instagram', medium: 'creator', campaign: 'creator_tiernan'})
const tiernanPage = readPage('get/tiernan')
assert.match(tiernanPage, /href="https:\/\/apps\.apple\.com\/redeem\?ctx=offercodes&amp;id=6788483296&amp;code=TIERNAN"/)
assert.match(tiernanPage, /For @tiernan_kiatphontip(&#39;|')s followers/)
checkStoreLinks('get/sami', {token: 'creator_sami', source: 'instagram', medium: 'creator', campaign: 'creator_sami'})
const samiPage = readPage('get/sami')
assert.match(samiPage, /href="https:\/\/apps\.apple\.com\/redeem\?ctx=offercodes&amp;id=6788483296&amp;code=SAMI"/)
assert.match(samiPage, /For @samihayes___(&#39;|')s followers/)
checkStoreLinks('get/aidan', {token: 'creator_aidan', source: 'instagram', medium: 'creator', campaign: 'creator_aidan'})
const aidanPage = readPage('get/aidan')
assert.match(aidanPage, /href="https:\/\/apps\.apple\.com\/redeem\?ctx=offercodes&amp;id=6788483296&amp;code=AIDAN"/)
assert.match(aidanPage, /For @muaythaistoic(&#39;|')s followers/)
for (const [slug, code] of Object.entries({nikita: 'NIKITA', liam: 'LIAM', tiernan: 'TIERNAN', sami: 'SAMI', aidan: 'AIDAN'})) {
  const page = readPage(`get/${slug}`)
  assert.match(page, /tap <strong[^>]*>Got a creator code\?<\/strong>/, `${slug} shows the in-app steps`)
  assert.match(page, new RegExp(`Enter <strong[^>]*>${code}</strong>, then tap <strong[^>]*>Start free month</strong>`), `${slug} shows its code in the in-app steps`)
  assert.match(page, new RegExp(`<strong[^>]*>Redeem code</strong>, and enter <strong[^>]*>${code}</strong>\\. Google Play codes only work for people who have never subscribed\\.`), `${slug} keeps the Google Play fallback`)
  assert.match(page, /<html lang="en-GB"/)
}
assert.match(creatorPage, /For @nikita_parlevliet(&#39;|')s followers/)

// Brazilian Portuguese page, in-app Android route only (no Google Play promo code).
checkStoreLinks('get/neks', {token: 'creator_neks', source: 'instagram', medium: 'creator', campaign: 'creator_neks'})
const neksPage = readPage('get/neks')
assert.match(neksPage, /<html lang="pt-BR"/)
assert.match(neksPage, /href="https:\/\/apps\.apple\.com\/redeem\?ctx=offercodes&amp;id=6788483296&amp;code=NEKS"/)
assert.match(neksPage, /Para quem segue @neks_muaythai/)
assert.match(neksPage, /toque em <strong[^>]*>Tem um código de criador\?<\/strong>/)
assert.match(neksPage, /Digite <strong[^>]*>NEKS<\/strong> e toque em <strong[^>]*>Começar mês grátis<\/strong>/)
assert.match(neksPage, /Válido até 3 de maio de 2027\./)
assert.doesNotMatch(neksPage, /Redeem code/, 'neks has no Google Play promo code')

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

console.log('Passed: four paid campaign routes, six creator code pages and the solo guide have attributed store links; guide is indexable and linked.')
