import React, { PureComponent } from 'react'
import { string, number, oneOfType } from 'prop-types'

import styles from './DescriptionListItem.module.scss'

class DescriptionListItem extends PureComponent {
  render() {
    const { itemKey, itemValue } = this.props

    if (!itemKey && !itemValue) return

    return (
      <div className={styles.DescriptionListItem}>
        {itemKey && (
          <dt className={styles.DescriptionListItemKey}>{itemKey}</dt>
        )}
        {itemValue && (
          <dd className={styles.DescriptionListItemValue}>{itemValue}</dd>
        )}
      </div>
    )
  }
}

DescriptionListItem.displayName = 'DescriptionListItem'

DescriptionListItem.propTypes = {
  itemKey: string,
  itemValue: oneOfType([string, number])
}

export default DescriptionListItem
