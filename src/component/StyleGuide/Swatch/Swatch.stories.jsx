import React from 'react'
import { storiesOf } from '@storybook/react'

import Swatch from '.'

const stories = storiesOf('Style Guide/Swatch', module)

stories.add('Info', () => <Swatch name="Slime Green" color="#bada55aa" />, {
  info: {
    inline: true,
    text: `Description to come…`
  }
})

stories.add('Default state', () => <Swatch name="Brand Blue" color="#bada55" />)
stories.add('With transparency', () => (
  <Swatch name="Brand Blue" color="#bada5588" />
))
