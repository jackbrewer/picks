import React, { PureComponent } from 'react'
import { node } from 'prop-types'

import styles from './VisuallyHidden.module.scss'

class VisuallyHidden extends PureComponent {
  render() {
    const { children } = this.props

    return <span className={styles.VisuallyHidden}>{children}</span>
  }
}

VisuallyHidden.propTypes = {
  children: node.isRequired
}

export default VisuallyHidden
