import React from 'react'
import classNames from 'classnames'
import { bool, node } from 'prop-types'

import styles from './TextAlign.module.scss'

const TextAlign = props => {
  const { center, children, justify, left, right } = props

  const getAlignmentType = () => {
    if (center) return 'center'
    if (justify) return 'justify'
    if (left) return 'left'
    if (right) return 'right'
  }

  const alignmentType = getAlignmentType()

  return (
    <div
      className={classNames(
        styles.TextAlign,
        alignmentType && styles[alignmentType]
      )}
    >
      {children}
    </div>
  )
}

TextAlign.propTypes = {
  children: node.isRequired,
  center: bool,
  justify: bool,
  left: bool,
  right: bool
}

export default TextAlign
