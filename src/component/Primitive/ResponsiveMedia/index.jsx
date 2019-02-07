import React, { PureComponent } from 'react'
import { node, number } from 'prop-types'
import styles from './ResponsiveMedia.module.scss'

class ResponsiveMedia extends PureComponent {
  render() {
    const { children, ratio } = this.props
    if (!ratio) return children
    const formattedRatio = parseFloat((ratio * 100).toFixed(4))

    return (
      <div
        className={styles.ResponsiveMedia}
        style={{ paddingBottom: `${formattedRatio}%` }}
      >
        {children}
      </div>
    )
  }
}

ResponsiveMedia.displayName = 'ResponsiveMedia'

ResponsiveMedia.propTypes = {
  children: node.isRequired,
  ratio: number
}

export default ResponsiveMedia
