import React from 'react'
import { arrayOf, bool, number, oneOfType, shape, string } from 'prop-types'
import NextSeo, { ArticleJsonLd } from 'next-seo'

import { config } from '../../../../meta.config'

const ArticleMeta = props => {
  const {
    authorName,
    authors,
    customTitle,
    description,
    expirationTime,
    images,
    modifiedTime,
    publishedTime,
    publisherLogo,
    publisherName,
    section,
    slug,
    tags,
    title
  } = props
  const canonical = `${config.url}${slug}`

  return (
    <>
      <NextSeo
        config={{
          title,
          titleTemplate: customTitle && '%s',
          description,
          canonical,
          openGraph: {
            title,
            description,
            url: canonical,
            images,
            type: 'article',
            article: {
              publishedTime,
              modifiedTime,
              expirationTime,
              section,
              authors,
              tags
            }
          }
        }}
      />

      <ArticleJsonLd
        url={canonical}
        title={title}
        description={description}
        images={images.map(image => image.url)}
        datePublished={publishedTime}
        dateModified={modifiedTime}
        authorName={authorName}
        publisherName={publisherName}
        publisherLogo={publisherLogo} // https://developers.google.com/search/docs/data-types/article#logo-guidelines
      />
    </>
  )
}

ArticleMeta.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  slug: string.isRequired,
  customTitle: bool,
  publishedTime: string,
  modifiedTime: string,
  expirationTime: string,
  section: string,
  authorName: string,
  publisherName: string,
  publisherLogo: string,
  authors: arrayOf(string),
  tags: arrayOf(string),
  images: arrayOf(
    shape({
      url: string.isRequired,
      width: oneOfType([string, number]),
      height: oneOfType([string, number]),
      alt: string
    })
  )
}

export default ArticleMeta
