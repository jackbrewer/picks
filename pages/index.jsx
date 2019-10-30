import React from 'react'
import StandardMeta from '../src/component/Meta/Standard'

import Container from '../src/component/Primitive/Container'
import SpacedList from '../src/component/Primitive/SpacedList'
import Type from '../src/component/Primitive/Type'

import SmartLink from '../src/component/Primitive/SmartLink'
import List from '../src/component/Primitive/List'

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
    <Container size="medium" gutter center>
      <SpacedList>
        <Type element="h2" size="display1">
          Example section page
        </Type>
        <List>
          <SmartLink to="/article">Example article page</SmartLink>
        </List>
      </SpacedList>
    </Container>
  </>
)

export default IndexPage
