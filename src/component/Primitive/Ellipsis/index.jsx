import React, { PureComponent } from 'react'
import { node } from 'prop-types'

import styles from './Ellipsis.module.scss'

class Ellipsis extends PureComponent {
  render() {
    const { children } = this.props

    return <div className={styles.Ellipsis}>{children}</div>
  }
}

Ellipsis.propTypes = {
  children: node.isRequired
}

export default Ellipsis
