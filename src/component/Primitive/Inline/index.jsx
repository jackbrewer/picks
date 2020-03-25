import React from 'react'
import { node } from 'prop-types'

import styles from './Inline.module.scss'

const Inline = ({ children }) => <div className={styles.Inline}>{children}</div>

Inline.propTypes = {
  children: node.isRequired
}

export default Inline
