import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import OffsetAnchor from '.'
import SmartLink from '../SmartLink'

const stories = storiesOf('Utility/OffsetAnchor', module)

stories.add('Info', () => <OffsetAnchor name="foo" />, {
  info: {
    inline: true,
    text: `
      OffsetAnchor component allows creation of a fixed point on a page which is visually offset from the top of the viewport. A use case for this would be a long FAQs or Terms & Conditions page, on a site which has a sticky navigation.
    `
  }
})

stories.add('Default state', () => (
  <Fragment>
    <SmartLink href='#foo'>Link to Anchor</SmartLink>
    <div style={{'height': '1000px'}} />
    <OffsetAnchor identifier="foo" />
    <div style={{'height': '1000px'}}>
      Content associated with anchor
    </div>
  </Fragment>
))