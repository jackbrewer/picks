import React from 'react'
import { storiesOf } from '@storybook/react'
import Placeholder from '../../Helper/Placeholder'

import Inline from '.'

const stories = storiesOf('Layout/Inline', module)

stories.add(
  'Info',
  () => (
    <Inline>
      {[...Array(10).keys()].map(i => (
        <Placeholder key={i}>Item {i + 1}</Placeholder>
      ))}
    </Inline>
  ),
  {
    info: {
      inline: true,
      text: `
        A wrapper component which evenly horizontally spaces its children.
      `
    }
  }
)

stories.add('Default state', () => (
  <Inline>
    {[...Array(10).keys()].map(i => (
      <Placeholder key={i}>Item {i + 1}</Placeholder>
    ))}
  </Inline>
))
