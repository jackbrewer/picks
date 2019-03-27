import React, { PureComponent } from 'react'
import { node } from 'prop-types'

import styles from './FieldAssistance.module.scss'

class FieldAssistance extends PureComponent {
  render() {
    const { children } = this.props
    return <div className={styles.FieldAssistance}>{children}</div>
  }
}

FieldAssistance.propTypes = {
  children: node.isRequired
}

export default FieldAssistance
