import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { node, string } from 'prop-types'

import styles from './NavigationWrapper.module.scss'

import List from '../../../List'

class NavigationWrapper extends PureComponent {
  render() {
    const { children, id } = this.props

    return (
      <nav id={id} className={classNames(styles.NavigationWrapper)}>
        <List inline>{children}</List>
      </nav>
    )
  }
}

NavigationWrapper.propTypes = {
  children: node.isRequired,
  id: string.isRequired
}

export default NavigationWrapper
