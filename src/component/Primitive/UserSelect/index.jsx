import React, { PureComponent } from 'react'
import { bool, node, string } from 'prop-types'

import styles from './UserSelect.module.scss'

import Element from '../Element'

class UserSelect extends PureComponent {
  getSelectionType() {
    const { all, none, text } = this.props
    if (none) return 'none'
    if (text) return 'text'
    if (all) return 'all'
    return 'auto'
  }

  render() {
    const { children, is } = this.props

    return (
      <Element
        className={(styles.UserSelect, styles[this.getSelectionType()])}
        is={is}
      >
        {children}
      </Element>
    )
  }
}

UserSelect.propTypes = {
  children: node.isRequired,
  is: string,

  all: bool,
  none: bool,
  text: bool
}

export default UserSelect
