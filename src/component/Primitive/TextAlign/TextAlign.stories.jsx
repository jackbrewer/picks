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

stories.add(
  'Alignment justified',
  () => <TextAlign justify>Example text, justified. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui delectus voluptas perspiciatis quod sequi? Necessitatibus eaque tempora, odit est, atque voluptate minus magni ullam assumenda dolor laudantium eveniet similique sapiente!</TextAlign>,
  {
    info: ''
  }
)
