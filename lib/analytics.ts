// Placeholder analytics hooks only. There is no lead tracker or dashboard
// wired up yet (that build is out of scope for this pass — see backlog
// B60-001/B60-002). This just gives the future tracker stable event names to
// listen for, so the site doesn't need a rebuild once it lands.
//
// Wire a real destination here later, e.g.:
//   window.dataLayer?.push({ event, ...detail })   // GA4 / GTM
//   window.fbq?.('trackCustom', event, detail)      // Meta Pixel

export type AnalyticsEvent = 'qualified_lead_started' | 'call_clicked' | 'visit_booked'

export function track(event: AnalyticsEvent, detail?: Record<string, string>) {
  if (typeof window === 'undefined') return
  console.info('[beyond60:analytics]', event, detail ?? {})
}
