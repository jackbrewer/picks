import {
  addDecorator,
  configure,
  getStorybook,
  setAddon
} from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import createPercyAddon from '@percy-io/percy-storybook'
import inPercy from '@percy-io/in-percy'
import mockdate from 'mockdate'

// import '../src/component/App/App.module.scss'
import './storybook.module.scss'

if (inPercy()) {
  mockdate.set('October 21, 2015 04:19:00')
}

const req = require.context('../src', true, /stories\.jsx$/)

const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

const { percyAddon, serializeStories } = createPercyAddon()

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
      },
      infoContent: {
        counterReset: 'selector-hack--story-info-content'
      }
    }
  })
)

setAddon(percyAddon)

configure(loadStories, module)

// NOTE: if you're using the Storybook options addon, call serializeStories *BEFORE* the setOptions call
serializeStories(getStorybook)
