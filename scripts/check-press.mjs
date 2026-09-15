import assert from 'node:assert/strict';
import {readFileSync,statSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join} from 'node:path';
const root=new URL('../',import.meta.url).pathname;
const c=JSON.parse(readFileSync(join(root,'src/content/press.json'),'utf8'));
const dir=join(root,'public/press');
const editorial=readFileSync(join(dir,'dee-editorial-copy.txt'),'utf8');
const manifest=JSON.parse(readFileSync(join(dir,'asset-manifest.json'),'utf8'));
for(const entry of manifest.files){
 const file=join(dir,entry.path);assert.equal(statSync(file).size,entry.bytes,entry.path);
 assert.equal(createHash('sha256').update(readFileSync(file)).digest('hex'),entry.sha256,entry.path);
 assert(!/contacts|evidence|diagnostic|followup|send-results|credentials/i.test(entry.path));
}
assert(editorial.includes(c.shortDescription));assert(editorial.includes(c.extendedDescription));
for(const f of c.features){assert(editorial.includes(f.body));for(const d of f.details)assert(editorial.includes(d));}
assert.equal(c.assets.filter(a=>a.group==='localized').length,6);
for(const a of c.assets){
 const file=join(root,'public',a.file);assert(existsSync(file));const png=readFileSync(file);
 assert.equal(png.readUInt32BE(16),a.width,a.id);assert.equal(png.readUInt32BE(20),a.height,a.id);
 assert(editorial.includes(a.caption),a.id);
}
for(const v of c.videos){
 assert(statSync(join(root,'public',v.file)).size>10000);assert(existsSync(join(root,'public',v.poster)));
 const vtt=readFileSync(join(root,'public',v.captions),'utf8');assert(vtt.startsWith('WEBVTT\n\n'));
 let previous=0;for(const [start,end,text] of v.cues){assert(start>=previous&&end>start);assert(vtt.includes(text));previous=end;}
 const [m,s]=v.duration.split(':').map(Number);assert.equal(previous,m*60+s);
}
for(const match of editorial.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi))assert.equal(match[0],c.contact,'Unexpected address in public copy');
assert(readFileSync(join(dir,'dee-fact-sheet.pdf')).subarray(0,5).toString()==='%PDF-');
console.log(`Passed: ${c.assets.length} original captures, 3 caption tracks, ${manifest.files.length} file hashes, shared copy and public-file boundary.`);
