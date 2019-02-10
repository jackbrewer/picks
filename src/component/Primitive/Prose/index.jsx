import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { bool, node, string } from 'prop-types'

import styles from './Prose.module.scss'

class Prose extends PureComponent {
  render() {
    const { children, className, html, inverse } = this.props

    if (!children && !html) return null

    return (
      <div
        className={classNames(
          styles.Prose,
          inverse && styles.inverse,
          className
        )}
        {...html && { dangerouslySetInnerHTML: { __html: html } }}
      >
        {children}
      </div>
    )
  }
}

Prose.propTypes = {
  children: node,
  className: string,
  html: string,
  inverse: bool
}

export default Prose
