import React from 'react'
import { storiesOf } from '@storybook/react'

import DescriptionListItem from '.'

const key = 'Key'
const value = 'Value'

const stories = storiesOf('Utility/DescriptionListItem', module)

stories.add(
  'Info',
  () => <DescriptionListItem itemKey={key} itemValue={value} />,
  {
    info: {
      inline: true,
      text: `
        List item to be wrapped in the DefinitionList component
    `
    }
  }
)

stories.add('Default state', () => (
  <DescriptionListItem itemKey={key} itemValue={value} />
))
