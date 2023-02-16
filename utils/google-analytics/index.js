import ReactGA4 from 'react-ga4'

const MEASUREMENT_ID = "G-WFC569Y64H"

const initializeGoogleAnalytics = () => {
  // Initialize GA4
  ReactGA4.initialize(MEASUREMENT_ID)
}

const trackGoogleAnalyticsSearchEvent = search_term => {
  ReactGA4.event('search', {
    search_term: search_term
  })
}

const trackGoogleAnalyticsCustomEvent = (category, action, label) => {
  // Send GA4 Event
  ReactGA4.event({
    category: category,
    action: action,
    label: label
  })
}

export default initializeGoogleAnalytics
export {
  initializeGoogleAnalytics,
  trackGoogleAnalyticsSearchEvent,
  trackGoogleAnalyticsCustomEvent
}
