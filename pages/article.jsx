import React from 'react'
import ArticleMeta from '../src/component/Meta/Article'

const ArticlePage = () => (
  <>
    <ArticleMeta
      title="Section Title"
      customTitle /* opts out of the default titleTemplate */
      description="Here’s a description"
      slug="/"
      images={[
        {
          url: 'https://source.unsplash.com/800x600?nature',
          width: 800,
          height: 600,
          alt: 'Example alt test'
        }
      ]}
      publishedTime="2017-06-21T23:04:13Z"
      modifiedTime="2018-01-21T18:04:43Z"
      expirationTime="2022-12-21T22:04:11Z"
      authorName="Author Name"
      publisherName="Publisher Name"
      publisherLogo="https://source.unsplash.com/600x60?nature"
    />
    <h1>Article Title</h1>
  </>
)

export default ArticlePage
