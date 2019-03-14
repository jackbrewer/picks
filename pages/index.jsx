import React from 'react'
import StandardMeta from '../src/component/Meta/Standard'

import Icon from '../src/component/Primitive/Icon'

const IndexPage = () => (
  <>
    <StandardMeta
      title="Section Title"
      description="Here’s a description"
      slug="/"
      customTitle
      images={[
        {
          url: 'https://source.unsplash.com/800x600?nature',
          width: 800,
          height: 600,
          alt: 'Example alt test'
        }
      ]}
    />
    <h1>
      <Icon type="_placeholder" a11yText="" />
      Example content
    </h1>
  </>
)

export default IndexPage
