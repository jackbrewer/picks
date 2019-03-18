const manifestConfig = {
  filename: 'static/manifest.json',
  name: 'Backline',
  short_name: 'Backline Short Name',
  description:
    'Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  background_color: '#ffffff',
  theme_color: '#5755d9',
  display: 'standalone',
  orientation: 'portrait',
  fingerprints: true,
  inject: true,
  start_url: '/',
  ios: {
    'apple-mobile-web-app-title': 'Backline',
    'apple-mobile-web-app-status-bar-style': '#5755d9'
  },
  icons: [
    {
      src: require.resolve('../../src/asset/meta/icon-manifest-512.png'),
      sizes: [96, 192, 512],
      destination: '/static/meta'
    }
  ],
  includeDirectory: true,
  publicPath: '..'
}

module.exports = manifestConfig
