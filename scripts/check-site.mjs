import assert from 'node:assert/strict'
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs'
import { join } from 'node:path'
const root = new URL('../dist/', import.meta.url).pathname
const walk = (dir) => readdirSync(dir).flatMap(name => { const p = join(dir, name); return statSync(p).isDirectory() ? walk(p) : [p] })
const pages = walk(root).filter(p => p.endsWith('.html'))
const play = 'https://play.google.com/store/apps/details?id=dev.nowham.dee'
for (const path of pages) {
  const html = readFileSync(path, 'utf8')
  for (const [, raw] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (!raw.startsWith('/') || raw.startsWith('//')) continue
    const url = new URL(raw.replaceAll('&amp;', '&'), 'https://dee.training')
    const target = join(root, decodeURIComponent(url.pathname))
    assert(existsSync(target), `${path}: missing ${raw}`)
    if (url.hash && url.pathname.endsWith('/')) {
      const dest = readFileSync(join(target, 'index.html'), 'utf8')
      assert(dest.includes(`id="${url.hash.slice(1)}"`), `${path}: missing anchor ${raw}`)
    }
  }
}
for (const locale of ['', 'es', 'fr', 'de', 'nl', 'pt-br', 'he']) {
  const html = readFileSync(join(root, locale, 'index.html'), 'utf8')
  assert.equal((html.match(/href="https:\/\/play.google.com\/store\/apps\/details\?id=dev.nowham.dee"/g) || []).length, 2)
  assert.equal((html.match(/href="https:\/\/apps.apple.com\/app\/id6788483296"/g) || []).length, 2)
  for (const key of ['name="description"', 'property="og:description"', 'name="twitter:description"']) {
    assert(new RegExp(key + ' content="[^"]*Android').test(html), `${locale}: ${key} missing Android`)
  }
  const schema = JSON.parse(html.match(/type="application\/ld\+json">(.*?)<\/script>/s)[1])
  assert(schema.operatingSystem.includes('Android'))
  assert(schema.installUrl.includes(play))
}
console.log(`Passed: ${pages.length} pages, internal links and anchors, 7 locales, both stores and metadata.`)
