import React, { PureComponent } from 'react'
import { node } from 'prop-types'

import styles from './SiteContainer.module.scss'

class SiteContainer extends PureComponent {
  render() {
    const { children } = this.props

    return <div className={styles.SiteContainer}>{children}</div>
  }
}

SiteContainer.propTypes = {
  children: node.isRequired
}

export default SiteContainer
