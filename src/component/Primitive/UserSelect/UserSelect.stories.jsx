import React from 'react'
import { storiesOf } from '@storybook/react'

import UserSelect from '.'

const stories = storiesOf('Utility/UserSelect', module)

stories.add(
  'Default state (auto)',
  () => (
    <div style={{ userSelect: 'none' }}>
      <UserSelect is="span" all>
        All text should be selectable
      </UserSelect>
    </div>
  ),
  {
    info: 'Component which can be used as a starting point for others'
  }
)

stories.add('all', () => (
  <div style={{ userSelect: 'none' }}>
    <UserSelect is="span" all>
      All text should be selectable
    </UserSelect>
  </div>
))

stories.add('text', () => (
  <div style={{ userSelect: 'none' }}>
    Only <UserSelect is="span" text>{`->THIS<-`}</UserSelect> should be
    selectable.
  </div>
))

stories.add('none', () => (
  <div style={{ userSelect: 'all' }}>
    Only <UserSelect is="span" none>{`->THIS<-`}</UserSelect> should be
    un-selectable.
  </div>
))
