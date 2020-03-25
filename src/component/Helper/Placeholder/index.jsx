import React from 'react'
import { node } from 'prop-types'

import styles from './Placeholder.module.scss'

const Placeholder = ({ children }) => (
  <div className={styles.Placeholder}>{children}</div>
)

Placeholder.propTypes = {
  children: node.isRequired
}

export default Placeholder
