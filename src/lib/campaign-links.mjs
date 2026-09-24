const appStoreBase = 'https://apps.apple.com/app/id6788483296'
const googlePlayBase = 'https://play.google.com/store/apps/details?id=dev.nowham.dee'
const appleProviderToken = '125910193'
const appleProductPageId = 'a8cbf41a-f2c2-4620-9142-4be86d24d96b'

/**
 * Give each first-party campaign link its own App Store token and Play install
 * referrer. Play expects the UTM string inside a single encoded referrer value.
 *
 * @param {{token: string, source: string, medium: string, campaign: string, content?: string}} attribution
 */
export function campaignStoreURLs(attribution) {
  const appStore = new URL(appStoreBase)
  appStore.searchParams.set('pt', appleProviderToken)
  appStore.searchParams.set('ct', attribution.token)
  appStore.searchParams.set('mt', '8')
  appStore.searchParams.set('ppid', appleProductPageId)

  const playReferrer = new URLSearchParams({
    utm_source: attribution.source,
    utm_medium: attribution.medium,
    utm_campaign: attribution.campaign,
  })
  if (attribution.content) playReferrer.set('utm_content', attribution.content)

  const googlePlay = new URL(googlePlayBase)
  googlePlay.searchParams.set('referrer', playReferrer.toString())

  return {appStoreURL: appStore.toString(), googlePlayURL: googlePlay.toString()}
}
