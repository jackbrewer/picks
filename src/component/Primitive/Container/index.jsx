import React, { PureComponent } from 'react'
import { bool, node, oneOf, string } from 'prop-types'
import classNames from 'classnames'
import Element from '../Element'

import styles from './Container.module.scss'

export const sizes = ['small', 'medium', 'large', 'wide']

class Container extends PureComponent {
  render() {
    const {
      as,
      center,
      children,
      className,
      gutter,
      noClearfix,
      size
    } = this.props

    return (
      <Element
        as={as}
        className={classNames(
          styles.Container,
          center && styles.center,
          gutter && styles.gutter,
          noClearfix && styles.noClearfix,
          size && styles[size],
          className
        )}
      >
        {children}
      </Element>
    )
  }
}

Container.propTypes = {
  as: string,
  center: bool,
  children: node.isRequired,
  className: string,
  gutter: bool,
  noClearfix: bool,
  size: oneOf(sizes)
}

export default Container
