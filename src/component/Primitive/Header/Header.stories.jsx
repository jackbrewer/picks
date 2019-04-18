import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from '.'

import Navigation from '../Navigation'

const navigation = (
  <Navigation id="navigation">
    <Navigation.Item to="/1" active>
      One
    </Navigation.Item>
    <Navigation.Item to="/2">Two</Navigation.Item>
    <Navigation.Item to="/3">Three</Navigation.Item>
  </Navigation>
)

const stories = storiesOf('Unsorted/Header', module)

stories.add('Info', () => <Header navigation={navigation} />, {
  info: {
    inline: true,
    text: `
      Contains a logo
    `
  }
})

stories.add('Default state', () => <Header navigation={navigation} />)
