import { addDecorator, configure, getStorybook, setAddon } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { withInfo } from '@storybook/addon-info'
import createPercyAddon from '@percy-io/percy-storybook'

import '../src/component/App/App.module.scss'
import './storybook.module.scss'

const req = require.context('../src', true, /stories\.jsx$/)

const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

const { percyAddon, serializeStories } = createPercyAddon()

// addon-options
addDecorator(
  withOptions({
    name: 'Backline',
    url: '/'
  })
)

// addon-info
addDecorator(
  withInfo({
    inline: false,
    styles: {
      button: {
        topRight: {
          borderRadius: '5px 0 0 0',
          bottom: 0,
          top: 'auto',
          zIndex: 99998
        }
      }
    }
  })
)

setAddon(percyAddon)

configure(loadStories, module)

// NOTE: if you're using the Storybook options addon, call serializeStories *BEFORE* the setOptions call
serializeStories(getStorybook)
