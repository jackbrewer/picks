import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { node, number } from 'prop-types'

import styles from './ResponsiveTableDataCell.module.scss'

class ResponsiveTableDataCell extends PureComponent {
  render() {
    const { children, hideUntil } = this.props

    return (
      <td
        className={classNames(
          styles.ResponsiveTableDataCell,
          hideUntil && `hideUntil-${hideUntil}`
        )}
      >
        {children}
      </td>
    )
  }
}

ResponsiveTableDataCell.propTypes = {
  children: node,
  hideUntil: number
}

export default ResponsiveTableDataCell
