import React, { PureComponent } from 'react'
import { node, string } from 'prop-types'

import styles from './FieldQuestion.module.scss'

class FieldQuestion extends PureComponent {
  render() {
    const { htmlFor, children } = this.props
    return (
      <div className={styles.FieldQuestion}>
        <label htmlFor={htmlFor}>{children}</label>
      </div>
    )
  }
}

FieldQuestion.displayName = 'FieldQuestion'

FieldQuestion.propTypes = {
  children: node.isRequired,
  htmlFor: string.isRequired
}

export default FieldQuestion
