// NEVER PUT SECRETS IN THIS FILE
const isProduction = process.env.NODE_ENV === 'production'

export const config = {
  googleSiteVerification: null,
  locale: 'en_GB',
  themeColor: '#1565c0',
  title: 'Backline',
  twitterHandle: '@backline_ui',
  url: isProduction ? 'https://backline.netlify.com' : 'http://localhost:3320'
}

export const defaults = {
  titleTemplate: `%s | ${config.title}`,
  openGraph: {
    site_name: config.title,
    type: 'website',
    locale: config.locale,
    url: config.url
  },
  twitter: {
    cardType: 'summary_large_image',
    site: config.twitterHandle
  }
}
