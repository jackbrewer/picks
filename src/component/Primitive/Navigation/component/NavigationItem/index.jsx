import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { bool, node } from 'prop-types'

import styles from './NavigationItem.module.scss'

import SmartLink from '../../../SmartLink'

class NavigationItem extends PureComponent {
  render() {
    const { children, active, ...other } = this.props

    return (
      <li className={classNames(styles.NavigationItem)}>
        <SmartLink
          className={classNames(
            styles.NavigationItemLink,
            active && styles.active
          )}
          {...other}
        >
          {children}
        </SmartLink>
      </li>
    )
  }
}

NavigationItem.displayName = 'NavigationItem'

NavigationItem.propTypes = {
  active: bool,
  children: node.isRequired
}

export default NavigationItem
