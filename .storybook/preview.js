import { addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import '../src/asset/scss/base.scss'
import './storybook.module.scss'

addParameters({
  grid: { cellSize: 8 },
  options: {
    showRoots: true
  }
})

addDecorator(
  withInfo({
    inline: false,
    styles: {
      button: {
        topRight: {
          borderRadius: '5px 0 0 0',
          bottom: 0,
          top: 'auto',
          zIndex: 99998,
          backgroundColor: '#1565c0'
        }
      },
      infoStory: {
        backgroundColor: 'rgb(255, 255, 255)',
        backgroundImage:
          'linear-gradient(to bottom, rgb(238, 238, 238) 0px, rgb(238, 238, 238) 1px, rgb(250, 250, 250) 1px, rgb(250, 250, 250) calc(100% - 1px), rgb(238, 238, 238) calc(100% - 1px), rgb(238, 238, 238) 100%)',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'calc(100% - 80px) 100%',
        padding: '20px 60px'
      },
      infoBody: {
        border: 0,
        margin: 0,
        paddingBottom: 20
      }
    }
  })
)
