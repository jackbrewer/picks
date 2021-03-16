import React from 'react'
import A11yNavigation from '.'

export default {
  title: 'Navigation/A11yNavigation',
  component: A11yNavigation,
  argTypes: {
    children: { control: { type: null } },
  },
}

const Template = (args) => <A11yNavigation {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <a href="#content">Jump to main content</a>
      <a href="#navigation">Jump to primary navigation</a>
    </>
  ),
}
Default.parameters = {
  a11y: { disable: true },
}
