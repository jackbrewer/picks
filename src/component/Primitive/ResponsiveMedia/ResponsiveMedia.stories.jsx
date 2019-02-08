import React from 'react'
import { storiesOf } from '@storybook/react'

import ResponsiveMedia from './'

const stories = storiesOf('Utility/ResponsiveMedia', module)

stories.add(
  'with custom ratio',
  () => (
    <ResponsiveMedia ratio={9 / 16}>
      <img src="http://img.clock.co.uk/800x450?text=16:9%20ratio" alt="" />
    </ResponsiveMedia>
  ),
  {
    info: `Reserves a space on page for slow-loading resources, using the
      supplied ratio. Avoids document reflow when child elements load.`
  }
)
