const path = require('path')
const sassTrue = require('sass-true')
const glob = require('glob')

describe('SCSS: Function', () => {
  const sassTestFiles = glob.sync(
    path.resolve(__dirname, 'function/**/*.test.scss')
  )
  sassTestFiles.forEach(file => sassTrue.runSass({ file }, describe, it))
})

describe('SCSS: Mixin', () => {
  const sassTestFiles = glob.sync(
    path.resolve(__dirname, 'mixin/**/*.test.scss')
  )
  sassTestFiles.forEach(file => sassTrue.runSass({ file }, describe, it))
})

describe('SCSS: Grid', () => {
  const sassTestFiles = glob.sync(
    path.resolve(__dirname, 'grid/**/*.test.scss')
  )
  sassTestFiles.forEach(file => sassTrue.runSass({ file }, describe, it))
})
