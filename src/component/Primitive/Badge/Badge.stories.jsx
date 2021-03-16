import React from 'react'
import Badge from '.'

export default {
  title: 'Titles & Text/Badge',
  component: Badge,
}

const Template = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Example content',
}
