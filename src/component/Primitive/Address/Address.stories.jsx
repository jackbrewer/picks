import React from 'react'
import { storiesOf } from '@storybook/react'

import Address from '.'

const stories = storiesOf('Unsorted/Address', module)

stories.add(
  'Info',
  () => (
    <Address
      type="Organisation"
      name="Organisation Name"
      streetAddress="123 Street Name"
      addressLocality="Town"
      addressRegion="City, County"
      postalCode="PO57 CDE"
      addressCountry="UK"
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
  <Address
    type="Organisation"
    name="Organisation Name"
    streetAddress="123 Street Name"
    addressLocality="Town"
    addressRegion="City, County"
    postalCode="PO57 CDE"
    addressCountry="UK"
  />
))
