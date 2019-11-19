import React, { Children } from 'react'
import classNames from 'classnames'
import { bool, node, string } from 'prop-types'

import styles from './ShrinkWrapWrapper.module.scss'

import Element from '../../../Element'

const ShrinkWrapWrapper = props => {
  const { children, as, fixed, fullWidth, spacing, vAlign } = props

  return (
    <Element
      as={as}
      className={classNames(
        styles.ShrinkWrapWrapper,
        fixed && styles.fixed,
        fullWidth && styles.fullWidth
      )}
    >
      {Children.map(children, child => {
        if (!child) return null
        return React.cloneElement(child, { spacing, vAlign })
      })}
    </Element>
  )
}

ShrinkWrapWrapper.propTypes = {
  children: node.isRequired,
  as: string,
  fixed: bool,
  fullWidth: bool,
  spacing: string,
  vAlign: string
}

export default ShrinkWrapWrapper
