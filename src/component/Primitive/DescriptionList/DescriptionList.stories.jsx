import React from 'react'
import { storiesOf } from '@storybook/react'

import DescriptionList from '.'

const items = {
  Position: 'Prop',
  Age: 27,
  Height: '200cm',
  'Games Played': 41
}

const stories = storiesOf('Utility/DescriptionList', module)

stories.add('Info', () => <DescriptionList items={items} />, {
  info: {
    inline: true,
    text: `
      Show the keys and values of an object in a list.
    `
  }
})

stories.add('Default state', () => <DescriptionList items={items} />)
stories.add('Has class from props', () => (
  <DescriptionList items={items} className="red" />
))
