const path = require('path')

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      { loader: 'sass-loader' }
    ]
  })
  return config
}
