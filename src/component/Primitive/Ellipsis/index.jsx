import React from 'react'
import { node, number, oneOfType, string } from 'prop-types'

import styles from './Ellipsis.module.scss'

const Ellipsis = props => {
  const { children, maxWidth } = props

  return (
    <div className={styles.Ellipsis} {...(maxWidth && { style: { maxWidth } })}>
      {children}
    </div>
  )
}

Ellipsis.propTypes = {
  children: node.isRequired,
  maxWidth: oneOfType([number, string])
}

export default Ellipsis
