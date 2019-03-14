const isProduction = process.env.NODE_ENV === 'production'

export const config = {
  title: 'Backline',
  url: isProduction ? 'https://backline.netlify.com' : 'http://localhost:3320',
  twitterHandle: '@backline_ui'
}

export const defaults = {
  titleTemplate: `%s | ${config.title}`,
  openGraph: {
    site_name: config.title,
    type: 'website',
    url: config.url
  },
  twitter: {
    cardType: 'summary_large_image',
    site: config.twitterHandle
  }
}
