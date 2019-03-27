import React, { PureComponent } from 'react'
import { node, string } from 'prop-types'

import styles from './CheckControlGroup.module.scss'

class CheckControlGroup extends PureComponent {
  render() {
    const { a11yLabel, children } = this.props

    return (
      <div
        className={styles.CheckControlGroup}
        role="group"
        aria-label={a11yLabel}
      >
        {children}
      </div>
    )
  }
}

CheckControlGroup.propTypes = {
  a11yLabel: string.isRequired,
  children: node.isRequired
}

export default CheckControlGroup
