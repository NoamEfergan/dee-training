# One useful round: store handoff

Campaign ID: `one_useful_round_20260928`. The date identifies the planned creative batch and remains stable if publication moves.

| Placement | First-party route | Apple `ct` | Play `utm_source` / `utm_content` |
|---|---|---|---|
| Instagram Reel bio | `https://dee.training/get/ig_one_round_20260928/` | `ig_one_round_20260928` | `instagram` / `reel_bio` |
| Opted-in partner share | `https://dee.training/get/partner_one_round_20260928/` | `partner_one_round_20260928` | `partner_share` / `partner_share` |

Both routes use the existing approved two-store page and official badges. Their Apple links retain provider token `125910193` and custom product page `a8cbf41a-f2c2-4620-9142-4be86d24d96b`. Google Play links carry the URL-encoded `referrer` value with `utm_source`, `utm_medium=organic_social`, `utm_campaign=one_useful_round_20260928`, and `utm_content`. Existing Meta campaign routes also gain encoded Play referrers; their Apple destinations remain unchanged.

## Before distribution

1. Run `npm run build`, `node scripts/check-web-analytics.mjs`, `node scripts/check-campaign-links.mjs`, and `node scripts/check-site.mjs`. The Pages workflow runs the analytics check, build and campaign-link check on every push.
2. After deploying, open each route with `?qa=growth` on a mobile device. Confirm both official store badges remain visible without scrolling, and each opens the expected listing. Verify the exact Apple `pt`/`ct`/`ppid` and the decoded Google Play `referrer` values. Record the device, time and destination.
3. For each route, trigger one QA page view and one click on **each** store badge. Confirm `Dee.Web.QA.page_view` and two `Dee.Web.QA.Dee.Web.StoreClicked` events in MGM with the route `campaign`, correct `store`, and `traffic_type=qa`. Browser Do Not Track and Global Privacy Control intentionally suppress these events. Query strings and fragments must not appear in event properties.
4. Confirm one controlled public page event and store-click event before placing the route in the bio. Keep QA events out of campaign counts. Check Play Console's UTM source and campaign breakdown after reporting matures; small rows may be grouped or suppressed.

These are page and store-button events, not verified installs. The links alone do not join an Android install to a first workout; that requires app-side Install Referrer handling. [Google's Play link format](https://developer.android.com/games/playgames/user-acquisition) specifies an encoded `referrer` value. [Play Console help](https://support.google.com/googleplay/android-developer/answer/9859173?hl=en) describes UTM source and campaign dimensions.
