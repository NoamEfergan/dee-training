// Aggregate acquisition measurement. No cookies, storage, identity joins or raw query data.
export const pages = new Set(['/', '/practice/', '/get/meta_guess/', '/get/meta_between/', '/get/meta_heard/', '/es/', '/fr/', '/de/', '/nl/', '/pt-br/', '/he/', '/try/', '/privacy/', '/terms/', '/support/', '/PrivacyPolicy/', '/TermsAndConditions/']);
export function pageContext(href) {
  const url = new URL(href);
  if (url.hostname !== 'dee.training') return null;
  const pathname = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
  if (!pages.has(pathname)) return null;
  return { hostname: 'dee.training', pathname, url: `https://dee.training${pathname}`, campaign: pathname.startsWith('/get/') ? pathname.split('/')[2] : 'none', qa: url.searchParams.get('qa') === 'growth' };
}
export function storeDestination(href) {
  const url = new URL(href);
  if (url.protocol !== 'https:') return null;
  if (url.hostname === 'apps.apple.com' && /\/id6788483296\/?$/.test(url.pathname)) return 'app_store';
  if (url.hostname === 'play.google.com' && url.pathname === '/store/apps/details' && url.searchParams.get('id') === 'dev.nowham.dee') return 'google_play';
  return null;
}
export function eventPayload(context, name, session, store) {
  const {qa, ...properties} = context;
  return {events: [{name: qa ? `Dee.Web.QA.${name}` : name, client_event_id: crypto.randomUUID(), timestamp: new Date().toISOString(), user_id: session, session_id: session, platform: 'web', environment: 'production', properties: {...properties, ...(store ? {store} : {}), measurement_version: 'growth_web_v1', traffic_type: qa ? 'qa' : 'public'}}]};
}
export function startAnalytics({apiKey, window: win = window, document: doc = document, fetch: send = fetch}) {
  if (!apiKey || win.navigator.doNotTrack === '1' || win.navigator.globalPrivacyControl === true) return;
  const context = pageContext(win.location.href);
  if (!context) return;
  const session = crypto.randomUUID(); // Deliberately resets on every full-page navigation.
  const emit = (name, store) => {
    void send('https://ingest.mostlygoodmetrics.com/v1/events', {
      method: 'POST', credentials: 'omit', referrerPolicy: 'no-referrer', keepalive: true,
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}`, 'X-MGM-Platform': 'web', 'X-MGM-Bundle-Id': 'dee.training'},
      body: JSON.stringify(eventPayload(context, name, session, store)),
    }).catch(() => {}); // Navigation remains available when reporting is blocked.
  };
  emit('page_view');
  doc.addEventListener('click', event => {
    if (!(event.target instanceof win.Element)) return;
    const anchor = event.target.closest('a[href]');
    if (!anchor) return;
    const store = storeDestination(anchor.href);
    if (store) emit('Dee.Web.StoreClicked', store);
  });
}
