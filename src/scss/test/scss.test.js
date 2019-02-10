const path = require('path')
const sassTrue = require('sass-true')
const glob = require('glob')

describe('SCSS: Functions', () => {
  const sassTestFiles = glob.sync(
    path.resolve(__dirname, 'function/**/*.test.scss')
  )
  sassTestFiles.forEach(file => sassTrue.runSass({ file }, describe, it))
})
