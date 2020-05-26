import React from 'react'
import { storiesOf } from '@storybook/react'

import Promo from '.'

import Type from '../Type'

const stories = storiesOf('Unsorted/Promo', module)

stories.add(
  'Info',
  () => <Promo src="https://img.clock.co.uk/500x300">Content</Promo>,
  {
    info: {
      inline: true,
      text: `
        TBC
      `
    }
  }
)

stories.add('Default state', () => (
  <Promo src="https://img.clock.co.uk/500x300">
    <Type as="h3" size="base">
      Example heading
    </Type>
    <Type size="small">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Type>
  </Promo>
))
