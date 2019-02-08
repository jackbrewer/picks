import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SmartLink from './'

const stories = storiesOf('Utility/SmartLink', module)

stories.add('Default (<button>)', () => <SmartLink>Button</SmartLink>)

stories.add('With button types', () => (
  <Fragment>
    <SmartLink type="button">Button (button)</SmartLink>
    <SmartLink type="submit">Button (submit)</SmartLink>
    <SmartLink type="reset">Button (reset)</SmartLink>
  </Fragment>
))

stories.add('With anchor element', () => (
  <SmartLink href="https://example.com">Anchor</SmartLink>
))

// stories.add('With Link component', () => (
//   <SmartLink to="/example">“Link” component</SmartLink>
// ))

stories.add('With onClick function', () => (
  <SmartLink onClick={action('clicked')}>Button with onClick</SmartLink>
))

stories.add('With additional attributes', () => (
  <Fragment>
    <SmartLink disabled>Button with `disabled`</SmartLink>
    <SmartLink title="example">Button with `title`</SmartLink>
  </Fragment>
))
