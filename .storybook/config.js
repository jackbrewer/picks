import { addDecorator, configure } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { withInfo } from '@storybook/addon-info'

import '../src/component/App/App.module.scss'
import './storybook.module.scss'

const req = require.context('../src', true, /stories\.jsx$/)

const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

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

configure(loadStories, module)
