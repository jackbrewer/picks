import React from 'react'
import Avatar from '.'

export default {
  title: 'Images & Icons/Avatar',
  component: Avatar,
}

const Template = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Firstname Lastname',
  initials: 'FL',
}

export const CustomSize = Template.bind({})
CustomSize.args = {
  ...Default.args,
  size: 96,
}

export const Image = Template.bind({})
Image.args = {
  src: 'https://img.clock.co.uk/96',
}

export const UncommonLength = Template.bind({})
UncommonLength.args = {
  initials: 'ABCD',
}

// stories.add('Initials overlaying image', () => (
//   <div>
//     <Avatar
//       initials="FL"
//       name="Firstname Lastname"
//       src="https://img.clock.co.uk/96"
//       size={96}
//     />
//     <Avatar
//       initials="FL"
//       name="Firstname Lastname"
//       src="https://img.clock.co.uk/96"
//     />
//     <Avatar
//       initials="FL"
//       name="Firstname Lastname"
//       src="https://img.clock.co.uk/96"
//       size={24}
//     />
//   </div>
// ))

// stories.add('Custom border radius', () => (
//   <div>
//     <Avatar borderRadius="40%" initials="FL" name="Firstname Lastname" />
//     <Avatar borderRadius="0.5em" initials="FL" name="Firstname Lastname" />
//     <Avatar borderRadius={4} initials="FL" name="Firstname Lastname" />
//   </div>
// ))

// stories.add('Custom styles', () => (
//   <div>
//     <Avatar
//       backgroundColor="#0ff"
//       color="#333"
//       initials="FL"
//       name="Firstname Lastname"
//     />
//   </div>
// ))
