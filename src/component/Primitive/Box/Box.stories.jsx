import React from 'react'
import { node } from 'prop-types'
import { storiesOf } from '@storybook/react'

import Box from '.'

const stories = storiesOf('Primitive/Box', module)

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

stories.add('Margin: 2x spacing unit', () => (
  <div>
    <Box m={2} style={{ outline: '2px dotted lime' }}>
      <ContentTile />
    </Box>
    <ContentTile />
  </div>
))

stories.add('Padding: 2x spacing unit', () => (
  <div>
    <Box p={2} style={{ outline: '2px dotted lime' }}>
      <ContentTile />
    </Box>
    <ContentTile />
  </div>
))
