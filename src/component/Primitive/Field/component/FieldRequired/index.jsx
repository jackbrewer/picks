import React, { PureComponent } from 'react'

import styles from './FieldRequired.module.scss'

class FieldRequired extends PureComponent {
  render() {
    return (
      <abbr className={styles.FieldRequired} title="This field is required">
        *
      </abbr>
    )
  }
}

FieldRequired.propTypes = {}

export default FieldRequired
