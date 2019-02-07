import { configure } from '@storybook/react'

import '../src/component/App/App.module.scss'

const req = require.context('../src', true, /stories\.jsx$/)
const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
