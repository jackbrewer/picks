import React from 'react'
import { storiesOf } from '@storybook/react'
import ButtonBase from '.'

const stories = storiesOf('Primitive/ButtonBase', module)

stories.add(
  'As an anchor',

  () => <ButtonBase href="#">Anchor</ButtonBase>
)

stories.add('As a button', () => <ButtonBase>Button</ButtonBase>)

stories.add('With wrapping text', () => (
  <ButtonBase href="#">
    Text
    <br />
    Wrapping
  </ButtonBase>
))

stories.add('Block (full-width)', () => (
  <ButtonBase block href="#">
    Block
  </ButtonBase>
))

stories.add('With disabled state', () => (
  <ButtonBase disabled>Disabled</ButtonBase>
))
