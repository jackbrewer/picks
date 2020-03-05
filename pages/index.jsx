import React from 'react'
import StandardMeta from '@/component/Meta/Standard'

import Container from '@/component/Primitive/Container'
import Stack from '@/component/Primitive/Stack'
import Type from '@/component/Primitive/Type'

import List from '@/component/Primitive/List'
import SmartLink from '@/component/Primitive/SmartLink'

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
      <Stack>
        <Type element="h2" size="display1">
          Example section page
        </Type>
        <List>
          <li>
            <SmartLink to="/article">Example article page</SmartLink>
          </li>
          <li>
            <SmartLink to="/movies">Movies</SmartLink>
          </li>
        </List>
      </Stack>
    </Container>
  </>
)

export default IndexPage
