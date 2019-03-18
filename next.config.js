const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withSize = require('next-size')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const WebpackPwaManifest = require('webpack-pwa-manifest')

const path = require('path')

const createSvgLoader = require('./config/webpack/svg-loader')
const pwaConfig = require('./config/webpack/pwa-config')

const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  webpack: (config, options) => {
    const { isServer, dev } = options

    // Should really be "!isServer && !dev" but can't until we add conditional
    // referencing of the manifest in the <head>
    if (!isServer && !dev) {
      config.plugins.push(new WebpackPwaManifest(pwaConfig))
    }

    config.module.rules.push({
      test: /\.svg$/,
      include: [path.resolve(__dirname, 'src/asset/svg/icon')],
      use: createSvgLoader()
    })
    return config
  }
}

module.exports = withPlugins(
  [
    [
      withImages,
      {
        exclude: path.resolve(__dirname, 'src/asset/svg/icon'),
        inlineImageLimit: 1
      }
    ],
    [
      withSass,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: isProduction
            ? '[local]_[hash:base64:5]'
            : '[name]__[local]___[hash:base64:5]'
        }
      }
    ],
    [withFonts],
    [withSize],
    [
      withBundleAnalyzer,
      {
        analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ['browser', 'both'].includes(
          process.env.BUNDLE_ANALYZE
        ),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: 'static',
            reportFilename: '../.bundle-analyzer/server.html'
          },
          browser: {
            analyzerMode: 'static',
            reportFilename: '../.bundle-analyzer/browser.html'
          }
        }
      }
    ]
  ],
  nextConfig
)
