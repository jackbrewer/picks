import React from 'react'
import { node } from 'prop-types'

import styles from './VisuallyHidden.module.scss'

const VisuallyHidden = props => {
  const { children } = props

  return <span className={styles.VisuallyHidden}>{children}</span>
}

VisuallyHidden.propTypes = {
  children: node.isRequired
}

export default VisuallyHidden
