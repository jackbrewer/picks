import React, { PureComponent } from 'react'
import { string } from 'prop-types'

import styles from './OffsetAnchor.module.scss'

class OffsetAnchor extends PureComponent {
  
  render() {
    const { identifier } = this.props
    return <div
      className={styles.OffsetAnchor}
      id={identifier}
    />
  }
}

OffsetAnchor.propTypes = {
  identifier: string.isRequired
}

export default OffsetAnchor
