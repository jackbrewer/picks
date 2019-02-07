import React from 'react'
import { storiesOf } from '@storybook/react'

import ResponsiveMedia from './'

const stories = storiesOf('Primitive/ResponsiveMedia', module)

stories.add('with custom ratio', () => (
  <ResponsiveMedia ratio={9 / 16}>
    <img src="http://img.clock.co.uk/800x450?text=16:9%20ratio" alt="" />
  </ResponsiveMedia>
))

stories.add('visible bg colour during load', () => (
  <ResponsiveMedia ratio={9 / 16} visible>
    <img src="http://img.clock.co.uk/800x450?text=16:9%20ratio" alt="" />
  </ResponsiveMedia>
))
