import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { bool, node } from 'prop-types'

import styles from './TextAlign.module.scss'

class TextAlign extends PureComponent {
  render() {
    const { children, center, left, right } = this.props

    return (
      <div
        className={classNames(
          styles.TextAlign,
          center && styles.center,
          left && styles.left,
          right && styles.right
        )}
      >
        {children}
      </div>
    )
  }
}

TextAlign.propTypes = {
  children: node.isRequired,
  center: bool,
  left: bool,
  right: bool
}

export default TextAlign
