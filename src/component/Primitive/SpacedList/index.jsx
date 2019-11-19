import React from 'react'
import { node } from 'prop-types'

import styles from './SpacedList.module.scss'

const SpacedList = props => {
  const { children } = props

  return <div className={styles.SpacedList}>{children}</div>
}

SpacedList.propTypes = {
  children: node.isRequired
}

export default SpacedList
