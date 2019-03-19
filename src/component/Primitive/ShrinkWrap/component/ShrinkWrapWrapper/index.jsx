import React, { Children, PureComponent } from 'react'
import classNames from 'classnames'
import { bool, node, string } from 'prop-types'

import styles from './ShrinkWrapWrapper.module.scss'

import Element from '../../../Element'

class ShrinkWrapWrapper extends PureComponent {
  render() {
    const { children, as, fixed, fullWidth, spacing, vAlign } = this.props

    return (
      <Element
        as={as}
        className={classNames(
          styles.ShrinkWrapWrapper,
          fixed && styles.fixed,
          fullWidth && styles.fullWidth
        )}
      >
        {Children.map(children, child =>
          React.cloneElement(child, { spacing, vAlign })
        )}
      </Element>
    )
  }
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
