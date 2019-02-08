import React from 'react'
import { storiesOf } from '@storybook/react'

import Example from '.'

const stories = storiesOf('Unsorted/Example', module)

stories.add('Default state', () => <Example>Content</Example>, {
  info: 'Example component which can be used as a starting point for others'
})
