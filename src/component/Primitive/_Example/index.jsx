import React, { PureComponent } from 'react'
import { node } from 'prop-types'

import styles from './Example.module.scss'

class Example extends PureComponent {
  render() {
    const { children } = this.props

    return <div className={styles.Example}>{children}</div>
  }
}

Example.displayName = 'Example'

Example.propTypes = {
  children: node.isRequired
}

export default Example
