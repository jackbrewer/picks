import React from 'react'
import { node } from 'prop-types'

import styles from './FieldAnswer.module.scss'

const FieldAnswer = props => {
  const { children } = props
  return <div className={styles.FieldAnswer}>{children}</div>
}

FieldAnswer.propTypes = {
  children: node.isRequired
}

export default FieldAnswer
