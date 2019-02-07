import React from 'react'
import { storiesOf } from '@storybook/react'

import ButtonStandard from '.'

const stories = storiesOf('Primitive/ButtonStandard', module)

stories.add('As an anchor', () => (
  <ButtonStandard href="#">Anchor</ButtonStandard>
))

stories.add('As a button', () => <ButtonStandard>Button</ButtonStandard>)

stories.add('With wrapping text', () => (
  <ButtonStandard href="#">
    Text
    <br />
    Wrapping
  </ButtonStandard>
))

stories.add('Block (full-width)', () => (
  <ButtonStandard block href="#">
    Block
  </ButtonStandard>
))

stories.add('With disabled state', () => (
  <ButtonStandard disabled>Disabled</ButtonStandard>
))

stories.add('With secondary variation', () => (
  <ButtonStandard secondary>Secondary</ButtonStandard>
))
