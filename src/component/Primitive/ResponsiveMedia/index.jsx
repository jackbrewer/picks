import React, { PureComponent } from 'react'
import { node, number } from 'prop-types'

import styles from './ResponsiveMedia.module.scss'

class ResponsiveMedia extends PureComponent {
  formatRatio(ratio) {
    return parseFloat((ratio * 100).toFixed(4))
  }

  render() {
    const { children, ratio } = this.props
    return (
      <div
        className={styles.ResponsiveMedia}
        style={{ paddingBottom: `${this.formatRatio(ratio)}%` }}
      >
        {children}
      </div>
    )
  }
}

ResponsiveMedia.propTypes = {
  children: node.isRequired,
  ratio: number.isRequired
}

export default ResponsiveMedia
