import React, { PureComponent } from 'react'
import { node } from 'prop-types'

import styles from './A11yNavigation.module.scss'

class A11yNavigation extends PureComponent {
  render() {
    const { children } = this.props

    return <div className={styles.A11yNavigation}>{children}</div>
  }
}

A11yNavigation.propTypes = {
  children: node.isRequired
}

export default A11yNavigation
