import React, { PureComponent } from 'react'
import { node, string } from 'prop-types'

import styles from './NavigationWrapper.module.scss'

class NavigationWrapper extends PureComponent {
  render() {
    const { children, id } = this.props

    return (
      <nav id={id} className={styles.NavigationWrapper}>
        <ul className={styles.NavigationList}>{children}</ul>
      </nav>
    )
  }
}

NavigationWrapper.propTypes = {
  children: node.isRequired,
  id: string.isRequired
}

export default NavigationWrapper
