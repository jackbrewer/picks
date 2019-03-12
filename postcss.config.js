module.exports = ({ env }) => {
  const isProduction = env === 'production'

  return {
    plugins: {
      'postcss-flexbugs-fixes': {},
      autoprefixer: {},
      cssnano: isProduction ? {} : false
    }
  }
}
