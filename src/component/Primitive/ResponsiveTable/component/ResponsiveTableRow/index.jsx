import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { bool, node } from 'prop-types'

import styles from './ResponsiveTableRow.module.scss'

class ResponsiveTableRow extends PureComponent {
  render() {
    const { children, highlighted, separatorBelow } = this.props

    return (
      <tr
        className={classNames(
          styles.ResponsiveTableRow,
          highlighted && styles.highlighted,
          separatorBelow && styles.separatorBelow
        )}
      >
        {children}
      </tr>
    )
  }
}

ResponsiveTableRow.propTypes = {
  children: node.isRequired,
  highlighted: bool,
  separatorBelow: bool
}

export default ResponsiveTableRow
