import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { bool, node, object } from 'prop-types'

import styles from './Position.module.scss'

export class Position extends PureComponent {
  getPositionType() {
    const { absolute, fixed, relative, sticky } = this.props
    if (absolute) return 'absolute'
    if (fixed) return 'fixed'
    if (relative) return 'relative'
    if (sticky) return 'sticky'
    return 'static'
  }

  render() {
    const { children, style } = this.props

    return (
      <div
        className={classNames(styles.Position, styles[this.getPositionType()])}
        style={{ ...style }}
      >
        {children}
      </div>
    )
  }
}

Position.displayName = 'Position'

Position.propTypes = {
  children: node.isRequired,
  absolute: bool,
  fixed: bool,
  relative: bool,
  sticky: bool,
  style: object
}

export default Position
