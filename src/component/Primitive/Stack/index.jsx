import React from 'react'
import { node } from 'prop-types'

import styles from './Stack.module.scss'

const Stack = ({ children }) => <div className={styles.Stack}>{children}</div>

Stack.propTypes = {
  children: node.isRequired
}

export default Stack
