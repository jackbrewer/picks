import React, { PureComponent } from 'react'
import { bool, string } from 'prop-types'

import shallowObjectToQuery from '../../../lib/shallow-object-to-query'

export const VimeoEmbedFallbackUrl = videoId => `https://vimeo.com/${videoId}`

export class VimeoEmbed extends PureComponent {
  render() {
    const { color, hideByline, hideTitle, start, videoId } = this.props
    const srcPrefix = 'https://player.vimeo.com/video/'
    const query = {
      ...(color && { color: color.replace('#', '') }),
      ...(hideByline && { byline: 0 }),
      ...(hideTitle && { title: 0 })
    }
    const formattedStart = start ? `#t=${start}s` : ``

    return (
      <iframe
        title="Embedded YouTube video"
        src={`${srcPrefix}${videoId}?${shallowObjectToQuery(
          query
        )}${formattedStart}`}
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen
      />
    )
  }
}

VimeoEmbed.propTypes = {
  start: string,
  color: string,
  hideTitle: bool,
  hideByline: bool,
  videoId: string.isRequired
}

export default VimeoEmbed
