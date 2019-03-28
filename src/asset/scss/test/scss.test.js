const path = require('path')
const sassTrue = require('sass-true')
const glob = require('glob')

describe('SCSS: Grid', () => {
  const sassTestFiles = glob.sync(
    path.resolve(__dirname, 'grid/**/*.test.scss')
  )
  sassTestFiles.forEach(file => sassTrue.runSass({ file }, describe, it))
})
