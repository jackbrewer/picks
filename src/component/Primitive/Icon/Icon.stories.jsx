import React from 'react'
import Icon, { types, vAligns } from '.'

export default {
  title: 'Images & Icons/Icon',
  component: Icon,
  argTypes: {
    type: { control: { type: null } },
  },
}

const Template = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  type: '_placeholder',
  a11yText: 'Placeholder Icon',
}

export const AllTypes = (args) =>
  types.map((type, i) => (
    <div style={{ margin: '5px 0' }} key={`icon-${i}`}>
      <Icon type={type} a11yText={`${type} icon`} vAlign="middle" />{' '}
      <code>{type}</code>
    </div>
  ))
AllTypes.args = {}

export const NoAccessibleText = Template.bind({})
NoAccessibleText.args = {
  ...Default.args,
  a11yText: '',
}

export const CustomWidth = Template.bind({})
CustomWidth.args = {
  ...Default.args,
  width: 100,
}

export const CustomHeight = Template.bind({})
CustomHeight.args = {
  ...Default.args,
  height: 100,
}

export const CustomVerticalAlign = (args) =>
  vAligns.map((vAlign, i) => (
    <div style={{ margin: '5px 0' }} key={`icon-${i}`}>
      <Icon
        type="_placeholder"
        a11yText="Placeholder icon"
        height={100}
        vAlign={vAlign}
      />{' '}
      <code>{vAlign}</code>
    </div>
  ))
CustomVerticalAlign.args = {}
