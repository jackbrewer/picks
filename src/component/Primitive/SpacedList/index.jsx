import React, { PureComponent } from 'react'
import { node } from 'prop-types'

import styles from './SpacedList.module.scss'

class SpacedList extends PureComponent {
  render() {
    const { children } = this.props

    return <div className={styles.SpacedList}>{children}</div>
  }
}

SpacedList.propTypes = {
  children: node.isRequired
}

export default SpacedList
