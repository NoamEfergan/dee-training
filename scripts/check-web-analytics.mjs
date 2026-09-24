import assert from 'node:assert/strict';
import { pageContext, storeDestination, eventPayload, startAnalytics } from '../src/lib/web-analytics.mjs';
const context = pageContext('https://dee.training/get/meta_between/?email=private@example.com&token=secret#private');
assert.equal(context.campaign, 'meta_between');
assert.equal(context.url, 'https://dee.training/get/meta_between/');
const audioContext = pageContext('https://dee.training/get/meta_audio_round_v1/?qa=growth&token=private');
assert.equal(audioContext.campaign, 'meta_audio_round_v1');
assert.equal(audioContext.url, 'https://dee.training/get/meta_audio_round_v1/');
assert.equal(eventPayload(audioContext, 'Dee.Web.StoreClicked', 'page-only-session', 'app_store').events[0].name, 'Dee.Web.QA.Dee.Web.StoreClicked');
const guideContext = pageContext('https://dee.training/solo-muay-thai-workout/?private=discarded#fragment');
assert.equal(guideContext.pathname, '/solo-muay-thai-workout/');
assert.equal(guideContext.campaign, 'solo_muay_thai_workout');
assert.equal(guideContext.url, 'https://dee.training/solo-muay-thai-workout/');
assert.equal(pageContext('http://localhost:4331/'), null);
assert.equal(pageContext('https://dee.training/private-person-name/'), null);
assert.equal(storeDestination('https://apps.apple.com/app/id6788483296?pt=125910193&ct=meta_between'), 'app_store');
assert.equal(storeDestination('https://apps.apple.com/app/id999'), null);
assert.equal(storeDestination('https://play.google.com/store/apps/details?id=dev.nowham.dee'), 'google_play');
assert.equal(storeDestination('https://play.google.com/store/apps/details?id=dev.nowham.dee&referrer=utm_source%3Ddee_training'), 'google_play');
assert.equal(storeDestination('https://evil.example/?id=dev.nowham.dee'), null);
const payload = eventPayload(context, 'page_view', 'page-only-session');
assert.ok(!JSON.stringify(payload).includes('private'));
assert.equal(payload.events[0].name, 'page_view');
assert.equal(eventPayload(pageContext('https://dee.training/?qa=growth'), 'page_view', 'test').events[0].name, 'Dee.Web.QA.page_view');
const requests=[]; let listener;
class Element { closest(){ return {href:'https://apps.apple.com/app/id6788483296?ct=meta_between'}; } }
const win={location:{href:'https://dee.training/get/meta_between/'},navigator:{},Element};
const doc={addEventListener:(_, handler)=>{listener=handler}};
const send=async (...args)=>{requests.push(args);return {ok:true}};
startAnalytics({apiKey:'test-only',window:win,document:doc,fetch:send});
listener({target:new Element()});
assert.equal(requests.length, 2);
assert.equal(requests[1][1].keepalive,true);
assert.equal(requests[1][1].credentials,'omit');
assert.equal(requests[1][1].referrerPolicy,'no-referrer');
const events=requests.map(r=>JSON.parse(r[1].body).events[0]);
assert.equal(events[0].session_id,events[1].session_id);
assert.equal(events[1].properties.store,'app_store');
const guideRequests=[]; let guideListener;
class PlayElement { closest(){ return {href:'https://play.google.com/store/apps/details?id=dev.nowham.dee&referrer=utm_source%3Ddee_training'}; } }
startAnalytics({
 apiKey:'test-only',
 window:{...win,location:{href:'https://dee.training/solo-muay-thai-workout/'},Element:PlayElement},
 document:{addEventListener:(_,handler)=>{guideListener=handler}},
 fetch:async (...args)=>{guideRequests.push(args);return {ok:true}},
});
guideListener({target:new PlayElement()});
const guideEvents=guideRequests.map(r=>JSON.parse(r[1].body).events[0]);
assert.equal(guideEvents.length,2);
assert.equal(guideEvents[0].properties.pathname,'/solo-muay-thai-workout/');
assert.equal(guideEvents[0].properties.campaign,'solo_muay_thai_workout');
assert.equal(guideEvents[1].properties.store,'google_play');
for (const config of [{apiKey:''},{apiKey:'test-only',navigator:{doNotTrack:'1'}},{apiKey:'test-only',navigator:{globalPrivacyControl:true}}]) {
 startAnalytics({apiKey:config.apiKey,window:{...win,navigator:config.navigator||{}},document:doc,fetch:send});
}
assert.equal(requests.length,2);
console.log('Passed: controlled paths, no query/hash data, exact store destinations, QA separation, page-scoped identity, keepalive, missing-key and privacy-signal controls.');
