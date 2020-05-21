import React from 'react'
import { storiesOf } from '@storybook/react'

import FixedFooter from '.'
import Placeholder from '../../Helper/Placeholder'

const stories = storiesOf('Unsorted/FixedFooter', module)

stories.add('Info', () => <FixedFooter>See examples</FixedFooter>, {
  info: {
    inline: true,
    text: `
      TBC
    `
  }
})

stories.add('Default state', () => (
  <>
    <Placeholder height="120vh">Regular content</Placeholder>
    <FixedFooter>
      <Placeholder height="calc(20vh + 10px)">Sticky content</Placeholder>
    </FixedFooter>
    <Placeholder height="50vh">Additional regular content</Placeholder>
  </>
))
