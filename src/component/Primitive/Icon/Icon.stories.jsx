import React from 'react'
import { storiesOf } from '@storybook/react'

import Icon from '.'
import Svgs from './Svgs'

const stories = storiesOf('Utility/Icon', module)

stories.add('Info', () => <Icon type="_Placeholder" />, {
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

stories.add('with all available types', () => (
  <div>
    {Object.keys(Svgs).map((type, i) => (
      <div style={{ margin: '5px 0' }} key={`icon-${i}`}>
        <Icon type={type} /> <code>{type}</code>
      </div>
    ))}
  </div>
))

stories.add('with a11y text', () => (
  <Icon type="_Placeholder" a11yText="My Account" />
))

stories.add('with custom width', () => (
  <div>
    {[20, 50, 100].map((width, i) => (
      <div style={{ margin: '5px 0' }} key={`icon-${i}`}>
        <Icon type="_Placeholder" width={width} />{' '}
        <code>
          {width}
          px
        </code>
      </div>
    ))}
  </div>
))

stories.add('with custom height', () => (
  <div>
    {[20, 50, 100].map((height, i) => (
      <div style={{ margin: '5px 0' }} key={`icon-${i}`}>
        <Icon type="_Placeholder" height={height} />{' '}
        <code>
          {height}
          px
        </code>
      </div>
    ))}
  </div>
))
