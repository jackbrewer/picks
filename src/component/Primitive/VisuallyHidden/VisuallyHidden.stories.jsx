import React from 'react'
import { storiesOf } from '@storybook/react'

import VisuallyHidden from '.'

const stories = storiesOf('Utility/VisuallyHidden', module)

stories.add(
  'Default state',
  () => <VisuallyHidden>Example hidden content</VisuallyHidden>,
  {
    info: `Visually hides content using CSS without using
      \`display: none\`. This means screen-readers/bots can still access the
      content. Useful for adding hidden labels to icons.`
  }
)
