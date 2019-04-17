import React, { PureComponent } from 'react'
import { node, oneOf } from 'prop-types'
import classNames from 'classnames'

import styles from './Floater.module.scss'

class Floater extends PureComponent {
  render() {
    const { align, children, size } = this.props

    return (
      <div
        className={classNames(
          styles.Floater,
          align && styles[align],
          size && styles[size]
        )}
      >
        {children}
      </div>
    )
  }
}

Floater.propTypes = {
  align: oneOf(['left', 'right']),
  children: node.isRequired,
  size: oneOf(['small', 'medium', 'full'])
}

export default Floater
