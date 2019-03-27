import React, { PureComponent } from 'react'
import { node } from 'prop-types'

import styles from './FieldAnswer.module.scss'

class FieldAnswer extends PureComponent {
  render() {
    const { children } = this.props
    return <div className={styles.FieldAnswer}>{children}</div>
  }
}

FieldAnswer.propTypes = {
  children: node.isRequired
}

export default FieldAnswer
