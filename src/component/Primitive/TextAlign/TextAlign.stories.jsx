import React from 'react'
import { storiesOf } from '@storybook/react'

import TextAlign from '.'

const stories = storiesOf('Utility/TextAlign', module)

stories.add(
  'Aligned center',
  () => <TextAlign center>Example text, center-aligned</TextAlign>,
  {
    info: 'Sets the text-alignment of child components'
  }
)

stories.add(
  'Aligned left',
  () => <TextAlign left>Example text, left-aligned</TextAlign>,
  {
    info: ''
  }
)

stories.add(
  'Aligned right',
  () => <TextAlign right>Example text, right-aligned</TextAlign>,
  {
    info: ''
  }
)
