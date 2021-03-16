import React from 'react'
import BackgroundImage from '.'

export default {
  title: 'Images & Icons/BackgroundImage',
  component: BackgroundImage,
}

const Template = (args) => <BackgroundImage {...args} />

export const Default = Template.bind({})
Default.args = {
  ratio: 9 / 16,
  alt: 'Random nature image from Unsplash',
  src: 'https://source.unsplash.com/800x600?nature',
}

export const CustomPosition = Template.bind({})
CustomPosition.args = {
  ...Default.args,
  position: '0 0',
}

export const CustomRatio = Template.bind({})
CustomRatio.args = {
  ...Default.args,
  ratio: 3 / 4,
}

export const CustomSize = Template.bind({})
CustomSize.storyName = 'Custom Size (200%)'
CustomSize.args = {
  ...Default.args,
  size: '200%',
}

export const CustomSizeContain = Template.bind({})
CustomSizeContain.storyName = 'Custom Size (Contain)'
CustomSizeContain.args = {
  ...Default.args,
  size: 'contain',
}

export const CustomBackgroundColor = Template.bind({})
CustomBackgroundColor.args = {
  ...Default.args,
  size: 'contain',
  color: '#c0ffee',
}

export const FillContainer = Template.bind({})
FillContainer.args = {
  ...Default.args,
  fillContainer: true,
}
FillContainer.decorators = [
  (Story) => (
    <div style={{ height: 'calc(100vh - 32px)', width: 'calc(100vw - 32px)' }}>
      <Story />
    </div>
  ),
]

export const NoAccessibleText = Template.bind({})
NoAccessibleText.args = {
  ...Default.args,
  size: 'contain',
  alt: '',
}

export const ResponsiveImage = Template.bind({})
ResponsiveImage.args = {
  ...Default.args,
  srcSet: [
    { from: 0, src: 'https://img.clock.co.uk/600' },
    { from: 600, src: 'https://img.clock.co.uk/800' },
    { from: 800, src: 'https://img.clock.co.uk/1000' },
  ],
}
