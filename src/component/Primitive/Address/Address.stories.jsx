import React from 'react'
import Address from '.'

export default {
  title: 'Schema/Address',
  component: Address,
}

const Template = (args) => <Address {...args} />

export const Default = Template.bind({})

Default.args = {
  type: 'Organisation',
  name: 'Organisation Name',
  streetAddress: '123 Street Name',
  addressLocality: 'Town',
  addressRegion: 'City, County',
  postalCode: 'PO57 CDE',
  addressCountry: 'UK',
}
