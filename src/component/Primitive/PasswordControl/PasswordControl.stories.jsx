import React from 'react'
import { storiesOf } from '@storybook/react'

import PasswordControl from '.'

const stories = storiesOf('Form/PasswordControl', module)

stories.add('Info', () => <PasswordControl name="password" />, {
  info: {
    inline: true,
    text: `
      Starter component which can be duplicated and used as a starting point
      for others.

      Use this first story to add documentation and show off the most
      interesting/useful component iteration. Use subsequent stories to detail
      all component permutations.
    `
  }
})

stories.add('Password type (default)', () => (
  <PasswordControl name="password" defaultValue="1234" />
))

stories.add('Text type (forced)', () => (
  <PasswordControl name="password" defaultValue="1234" type="text" />
))
