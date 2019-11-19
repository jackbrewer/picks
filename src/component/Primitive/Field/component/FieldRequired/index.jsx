import React from 'react'

import styles from './FieldRequired.module.scss'

const FieldRequired = props => {
  return (
    <abbr className={styles.FieldRequired} title="This field is required">
      *
    </abbr>
  )
}

FieldRequired.propTypes = {}

export default FieldRequired
