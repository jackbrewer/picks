import React from 'react'
import { storiesOf } from '@storybook/react'

import InlineGroup from '.'

import ButtonStandard from '../ButtonStandard'
import TextControl from '../TextControl'

const stories = storiesOf('Unsorted/InlineGroup', module)

stories.add(
  'Info',
  () => (
    <InlineGroup>
      <ButtonStandard>One</ButtonStandard>
      <ButtonStandard>Two</ButtonStandard>
      <ButtonStandard>Three</ButtonStandard>
    </InlineGroup>
  ),
  {
    info: {
      inline: true,
      text: `Hi
    `
    }
  }
)

stories.add('Three buttons', () => (
  <InlineGroup>
    <ButtonStandard>One</ButtonStandard>
    <ButtonStandard>Two</ButtonStandard>
    <ButtonStandard>Three</ButtonStandard>
  </InlineGroup>
))

stories.add('Two buttons', () => (
  <InlineGroup>
    <ButtonStandard>One</ButtonStandard>
    <ButtonStandard>Two</ButtonStandard>
  </InlineGroup>
))

stories.add('Single button', () => (
  <InlineGroup>
    <ButtonStandard>One</ButtonStandard>
  </InlineGroup>
))

stories.add('Full-width (natural width items)', () => (
  <InlineGroup block>
    <ButtonStandard>One</ButtonStandard>
    <ButtonStandard>Two</ButtonStandard>
    <ButtonStandard>Three with longer label</ButtonStandard>
  </InlineGroup>
))

stories.add('Full-width (even width items)', () => (
  <InlineGroup block even>
    <ButtonStandard>One</ButtonStandard>
    <ButtonStandard>Two</ButtonStandard>
    <ButtonStandard>Three with longer label</ButtonStandard>
  </InlineGroup>
))

stories.add('With TextControl', () => (
  <InlineGroup block>
    <TextControl
      name="exampleText"
      type="text"
      placeholder="Example placeholder"
    />
    <ButtonStandard>Action</ButtonStandard>
  </InlineGroup>
))
