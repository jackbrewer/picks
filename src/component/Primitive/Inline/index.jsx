import React from 'react'
import classNames from 'classnames'
import { node, oneOf } from 'prop-types'
import sassKeysToArray from '../../../lib/sass-keys-to-array'

import styles from './Inline.module.scss'

const Inline = ({ children, gap }) => (
  <div className={classNames(styles.Inline, gap && styles[gap])}>
    {children}
  </div>
)

Inline.defaultProps = {
  gap: 'medium'
}

Inline.propTypes = {
  children: node.isRequired,
  gap: oneOf(sassKeysToArray(styles.gaps))
}

export default Inline
