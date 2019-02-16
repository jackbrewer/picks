import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { bool, node, oneOf } from 'prop-types'

import styles from './ShrinkWrapItem.module.scss'

class ShrinkWrapItem extends PureComponent {
  render() {
    const { children, noWrap, shrink, spacing, vAlign } = this.props
    return (
      <span
        className={classNames(
          styles.ShrinkWrapItem,
          noWrap && styles.noWrap,
          shrink && styles.shrink,
          spacing && styles[spacing],
          vAlign && styles[vAlign]
        )}
      >
        {children}
      </span>
    )
  }
}

ShrinkWrapItem.displayName = 'ShrinkWrapItem'

ShrinkWrapItem.propTypes = {
  children: node.isRequired,
  shrink: bool,
  noWrap: bool,
  spacing: oneOf(['comfortable']),
  vAlign: oneOf(['top', 'middle', 'bottom'])
}

export default ShrinkWrapItem
