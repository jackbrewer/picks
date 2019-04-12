import React, { PureComponent } from 'react'
import { bool, node, string } from 'prop-types'

import styles from './CaptionedMedia.module.scss'

class CaptionedMedia extends PureComponent {
  render() {
    const { caption, children, figure } = this.props
    const BodyEl = figure ? 'figure' : 'div'
    const CaptionEl = figure ? 'figcaption' : 'div'

    return (
      <div className={styles.CaptionedMedia}>
        <BodyEl className={styles.CaptionedMediaBody}>{children}</BodyEl>
        {caption && (
          <CaptionEl className={styles.CaptionedMediaCaption}>
            {caption}
          </CaptionEl>
        )}
      </div>
    )
  }
}

CaptionedMedia.propTypes = {
  caption: string,
  children: node.isRequired,
  figure: bool
}

export default CaptionedMedia
