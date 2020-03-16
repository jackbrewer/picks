import React from 'react'
import { storiesOf } from '@storybook/react'

import Stack from '.'

const stories = storiesOf('Layout/Stack', module)

stories.add(
  'Info',
  () => (
    <Stack>
      <div style={{ background: 'tan', padding: 8 }}>Item 1</div>
      <div style={{ background: 'tan', padding: 8 }}>Item 2</div>
      <div style={{ background: 'tan', padding: 8 }}>Item 3</div>
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
    <div style={{ background: 'tan', padding: 8 }}>Item 1</div>
    <div style={{ background: 'tan', padding: 8 }}>Item 2</div>
    <div style={{ background: 'tan', padding: 8 }}>Item 3</div>
  </Stack>
))
