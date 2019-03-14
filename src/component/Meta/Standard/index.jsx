import React from 'react'
import { bool, number, oneOfType, shape, string } from 'prop-types'
import NextSeo from 'next-seo'

import { config } from '../../../../meta.config'

const StandardMeta = props => {
  const { title, description, slug, customTitle, image } = props
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
            images: [image]
          }
        }}
      />
    </>
  )
}

StandardMeta.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  slug: string.isRequired,
  customTitle: bool,
  image: shape({
    url: string.isRequired,
    width: oneOfType([string, number]),
    height: oneOfType([string, number]),
    alt: string
  })
}

export default StandardMeta
