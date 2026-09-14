# Growth website measurement

Prepared 14 September 2026. Do not activate until a separate production MGM ingestion key restricted to `dee.training` is configured and a QA page view and store click are visible in MGM.

The public browser key is supplied as the GitHub Actions repository secret `PUBLIC_DEE_WEB_INGEST_KEY`. It is an ingestion-only browser value, not a dashboard/admin credential. Never use the unrestricted iOS production key. Missing configuration means no telemetry requests.

The adapter uses MGM’s REST event endpoint and the domain header from the official JavaScript SDK 0.12.0. Sources: https://mostlygoodmetrics.com/docs and https://github.com/Mostly-Good-Metrics/mostly-good-metrics-js . Automatic SDK page capture was intentionally avoided because it sends the complete URL, query and fragment. The adapter sends only a known path, controlled campaign/store fields and a random page-only identity. No cookies, localStorage, form values or referrer URL. DNT/GPC disables capture; blocked reporting never prevents store navigation. These are aggregate page/click counts, not unique people across visits or deterministic app attribution. Repeated clicks can appear more than once.

On `https://dee.training/get/meta_between/?qa=growth`, page and click events have the `Dee.Web.QA.` prefix and `traffic_type=qa`; they must not be added to public conversion counts. Public page views use `page_view`; public store clicks use `Dee.Web.StoreClicked`. Apple destination query parameters are preserved because the handler does not replace links or intercept navigation.

Acceptance: build and `node scripts/check-web-analytics.mjs`; inspect a real QA page and click, confirm both events in MGM, check campaign and store fields and absence of raw query values, then validate a controlled public event separately and record the QA timestamp before any paid flight. No live event acceptance has yet been claimed. The policy disclosure ships together with activation.

A single connector create-key request on 14 September timed out after 300 seconds. Its result was an error and no raw key was returned. Reconcile the account’s key list by name before creating or retrying anything.
