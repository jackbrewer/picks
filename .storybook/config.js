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
      },
      infoStory: {
        border: '1px solid rgb(238, 238, 238)',
        background: 'rgb(250, 250, 250)',
        borderRadius: '4px',
        padding: '20px',
        margin: '10px 40px'
      },
      infoBody: {
        border: 0,
        margin: 0,
        paddingBottom: 20
      },
      infoContent: {
        counterReset: 'selector-hack--story-info-content'
      }
    }
  })
)

configure(loadStories, module)
