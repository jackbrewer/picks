import React from 'react'
import { storiesOf } from '@storybook/react'

import Servicing from '.'

const stories = storiesOf('Page/Servicing', module)

stories.add('Default state', () => <Servicing />)
