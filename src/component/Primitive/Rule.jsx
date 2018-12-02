import React, { PureComponent } from 'react'
import styles from './Rule.module.sass'

class Rule extends PureComponent {
  render() {
    return <hr className={styles.Rule} />
  }
}

export default Rule
