const withSass = require('@zeit/next-sass')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isProduction
      ? '[local]_[hash:base64:5]'
      : '[name]__[local]___[hash:base64:5]'
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      include: [path.resolve(__dirname, 'src/svg')],
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: { icon: true }
        }
      ]
    })
    return config
  }
})
