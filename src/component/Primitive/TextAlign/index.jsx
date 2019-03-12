import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { bool, node } from 'prop-types'

import styles from './TextAlign.module.scss'

class TextAlign extends PureComponent {
  getAlignmentType() {
    const { center, justify, left, right } = this.props
    if (center) return 'center'
    if (justify) return 'justify'
    if (left) return 'left'
    if (right) return 'right'
  }

  render() {
    const { children } = this.props
    const alignmentType = this.getAlignmentType()

    return (
      <div
        className={classNames(
          styles.TextAlign,
          alignmentType && styles[alignmentType]
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
  justify: bool,
  left: bool,
  right: bool
}

export default TextAlign
