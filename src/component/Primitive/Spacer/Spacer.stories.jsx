import React from 'react'
import { node } from 'prop-types'
import { storiesOf } from '@storybook/react'

import Spacer from '.'

const ContentTile = ({ children }) => (
  <div
    style={{
      backgroundColor: 'lightblue',
      height: '80px',
      // width: '140px',
      borderRadius: '5px',
      lineHeight: '16px',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center'
    }}
  >
    {children}
  </div>
)

ContentTile.propTypes = {
  children: node
}

const stories = storiesOf('Unsorted/Spacer', module)

stories.add('Info', () => <Spacer>Content</Spacer>, {
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

stories.add('Margin: 2x spacing unit', () => (
  <div>
    <Spacer m={2} style={{ outline: '2px dotted lime' }}>
      <ContentTile />
    </Spacer>
    <ContentTile />
  </div>
))

stories.add('Padding: 2x spacing unit', () => (
  <div>
    <Spacer p={2} style={{ outline: '2px dotted lime' }}>
      <ContentTile />
    </Spacer>
    <ContentTile />
  </div>
))
