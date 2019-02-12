import React from 'react'
import { storiesOf } from '@storybook/react'

import Element from '.'

const stories = storiesOf('Utility/Element', module)

stories.add('Default state', () => <Element>Content wrapped in div</Element>, {
  info: `Low-level component which can be used within other components to allow
    authors to specify which HTML element to use.

    Unlikely to be used directly as authors could instead use the desired
    element.`
})

stories.add('With specified element', () => (
  <Element is="h1">Content wrapped in h1</Element>
))
