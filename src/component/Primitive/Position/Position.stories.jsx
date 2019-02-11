import React from 'react'
import { node, number } from 'prop-types'
import { storiesOf } from '@storybook/react'

import Position from '.'

const stories = storiesOf('Utility/Position', module)

const PositionContainer = ({ children, height }) => (
  <div
    style={{
      height: height || 'auto',
      position: 'relative',
      border: '2px solid red'
    }}
  >
    {children}
  </div>
)

PositionContainer.propTypes = {
  children: node.isRequired,
  height: number
}

stories.add(
  'Static (default)',
  () => (
    <PositionContainer height={100}>
      <Position>Content</Position>
    </PositionContainer>
  ),
  {
    info: {
      text: `A helper component which can be useful for ad-hoc positioning
        of child components when building layouts.`,
      propTablesExclude: [PositionContainer]
    }
  }
)

stories.add(
  'Relative',
  () => (
    <PositionContainer height={100}>
      <Position relative style={{ top: 10, left: 10 }}>
        Content
      </Position>
    </PositionContainer>
  ),
  {
    info: {
      text: '',
      propTablesExclude: [PositionContainer]
    }
  }
)

stories.add(
  'Absolute',
  () => (
    <PositionContainer height={100}>
      <Position absolute style={{ top: '50%' }}>
        Content
      </Position>
    </PositionContainer>
  ),
  {
    info: {
      text: '',
      propTablesExclude: [PositionContainer]
    }
  }
)

stories.add(
  'Fixed',
  () => (
    <PositionContainer height={2000}>
      <Position fixed style={{ bottom: 0 }}>
        Content
      </Position>
    </PositionContainer>
  ),
  {
    info: {
      text: '',
      propTablesExclude: [PositionContainer]
    }
  }
)

stories.add(
  'Sticky',
  () => (
    <PositionContainer height={2000}>
      <Position sticky style={{ top: 0 }}>
        Content
      </Position>
    </PositionContainer>
  ),
  {
    info: {
      text: '',
      propTablesExclude: [PositionContainer]
    }
  }
)
