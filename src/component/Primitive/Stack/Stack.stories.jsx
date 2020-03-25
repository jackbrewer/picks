import React from 'react'
import { storiesOf } from '@storybook/react'
import Placeholder from '../../Helper/Placeholder'
import Stack from '.'

const stories = storiesOf('Layout/Stack', module)

stories.add(
  'Info',
  () => (
    <Stack>
      {[...Array(10).keys()].map(i => (
        <Placeholder key={i}>Item {i + 1}</Placeholder>
      ))}
    </Stack>
  ),
  {
    info: {
      inline: true,
      text: `
        A wrapper component which evenly vertically-spaces its children.
      `
    }
  }
)

stories.add('Default state', () => (
  <Stack>
    {[...Array(10).keys()].map(i => (
      <Placeholder key={i}>Item {i + 1}</Placeholder>
    ))}
  </Stack>
))
