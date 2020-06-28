import React from 'react'
import { storiesOf } from '@storybook/react'

import Progress from '.'

const stories = storiesOf('Future/Progress', module)

stories.add('Info', () => <Progress progress={50} />, {
  info: {
    inline: true,
    text: ``
  }
})

stories.add('Default state', () => <Progress progress={50} />)

stories.add('Empty state', () => <Progress />)

stories.add('Filled state', () => <Progress progress={100} />)

stories.add('Stacked values', () => <Progress progress={[25, 20, 10, 25]} />)
