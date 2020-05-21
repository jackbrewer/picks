import React from 'react'
import { storiesOf } from '@storybook/react'

import LoadingOverlay from '.'
import Placeholder from '../../Helper/Placeholder'

const stories = storiesOf('Unsorted/LoadingOverlay', module)

stories.add(
  'Info',
  () => (
    <LoadingOverlay loading>
      <Placeholder height={300} />
    </LoadingOverlay>
  ),
  {
    info: {
      inline: true,
      text: `
        Wraps other components and overlays a loading indicator when passed the
         \`loading\` prop.
      `
    }
  }
)

stories.add('Active state', () => (
  <LoadingOverlay loading>
    <Placeholder height={300} />
  </LoadingOverlay>
))

stories.add('Inactive state', () => (
  <LoadingOverlay>
    <Placeholder height={300} />
  </LoadingOverlay>
))
