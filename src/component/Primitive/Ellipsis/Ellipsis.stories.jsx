import React from 'react'
import { storiesOf } from '@storybook/react'

import Ellipsis from './'

const stories = storiesOf('Utility/Ellipsis', module)

stories.add(
  'Default state',
  () => (
    <Ellipsis>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel
      augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a
      pharetra augue.
    </Ellipsis>
  ),
  { info: 'Explain component here' }
)
