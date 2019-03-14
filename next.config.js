const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withSize = require('next-size')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

const path = require('path')

const createSvgLoader = require('./config/webpack/svg-loader')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = withPlugins([
  [
    withImages,
    {
      exclude: path.resolve(__dirname, 'src/svg/icon'),
      inlineImageLimit: 1,
      webpack(config, options) {
        config.module.rules.unshift({
          test: /\.svg$/,
          include: [path.resolve(__dirname, 'src/svg/icon')],
          use: createSvgLoader()
        })
        return config
      }
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
  [withSize],
  [
    withBundleAnalyzer,
    {
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
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
])
