import React, { PureComponent } from 'react'
import { object } from 'prop-types'

import styles from './DescriptionList.module.scss'

class DescriptionList extends PureComponent {
  render() {
    const { items } = this.props

    return (
      <dl className={styles.DescriptionList}>
        {Object.entries(items).map((item, i) => {
          const [term, details] = item

          return (
            <div
              className={styles.DescriptionListItem}
              key={`desc-list-item-${i}`}
            >
              <dt className={styles.DescriptionListTerm}>{term}</dt>
              <dd className={styles.DescriptionListDetails}>{details}</dd>
            </div>
          )
        })}
      </dl>
    )
  }
}

DescriptionList.propTypes = {
  items: object.isRequired
}

export default DescriptionList
