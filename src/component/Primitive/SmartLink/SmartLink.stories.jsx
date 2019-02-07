import React from 'react'
import { storiesOf } from '@storybook/react'

import SmartLink from './'

const stories = storiesOf('Primitive/SmartLink', module)

stories.add('Default (<button>)', () => <SmartLink>Button</SmartLink>)

stories.add('With button element', () => (
  <div>
    <SmartLink type="button">Button</SmartLink>
    <SmartLink type="submit">Submit</SmartLink>
    <SmartLink type="reset">Reset</SmartLink>
  </div>
))

stories.add('With anchor element', () => (
  <SmartLink href="https://example.com">Anchor</SmartLink>
))

stories.add('With Link component', () => (
  <SmartLink to="/example">React Router “Link” component</SmartLink>
))

stories.add('With disabled attribute (<button>)', () => (
  <div>
    <SmartLink disabled>Button</SmartLink>
    <SmartLink disabled href="https://example.com">
      Button
    </SmartLink>
    <SmartLink disabled href="/example">
      Button
    </SmartLink>
  </div>
))

stories.add('With onClick function', () => (
  <SmartLink
    onClick={e => {
      e.target.textContent = 'Clicked'
    }}
  >
    Button
  </SmartLink>
))

stories.add('With additional attributes', () => (
  <SmartLink title="example">Button</SmartLink>
))
