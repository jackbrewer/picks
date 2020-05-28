import React from 'react'
import { storiesOf } from '@storybook/react'

import SplitHero from '.'

const stories = storiesOf('Unsorted/SplitHero')

stories.add(
  'Info',
  () => (
    <SplitHero
      alt="Example a11y description"
      ctaText="Read more"
      ctaUrl="https://example.com"
      description="Maecenas mattis magna id erat blandit iaculis. Integer turpis lacus, euismod at eleifend commodo, dignissim in odio."
      title="Example Title"
      srcSet={[
        { width: 0, src: 'https://img.clock.co.uk/800' },
        { width: 550, src: 'https://img.clock.co.uk/550' },
        { width: 1000, src: 'https://img.clock.co.uk/800' },
        { width: 2000, src: 'https://img.clock.co.uk/800' }
      ]}
    />
  ),
  {
    info: {
      inline: true,
      text: `
      TBC
    `
    }
  }
)

stories.add('Default state', () => (
  <SplitHero
    alt="Example a11y description"
    ctaText="Read more"
    ctaUrl="https://example.com"
    description="Maecenas mattis magna id erat blandit iaculis. Integer turpis lacus, euismod at eleifend commodo, dignissim in odio."
    title="Example Title"
    srcSet={[
      { width: 0, src: 'https://img.clock.co.uk/800' },
      { width: 550, src: 'https://img.clock.co.uk/550' },
      { width: 1000, src: 'https://img.clock.co.uk/800' },
      { width: 2000, src: 'https://img.clock.co.uk/800' }
    ]}
  />
))
