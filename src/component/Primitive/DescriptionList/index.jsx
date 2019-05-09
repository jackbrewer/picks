import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { object, string } from 'prop-types'

import styles from './DescriptionList.module.scss'

import DescriptionListItem from '../DescriptionListItem'

class DescriptionList extends PureComponent {
  render() {
    const { items, className } = this.props
    return (
      <dl className={classNames(styles.DescriptionList, className)}>
        {items &&
          Object.entries(items).map(item => {
            const [key, value] = item
            return (
              <DescriptionListItem
                key={`DescriptionListItem${key}`}
                itemKey={key}
                itemValue={value}
              />
            )
          })}
      </dl>
    )
  }
}

DescriptionList.displayName = 'DescriptionList'

DescriptionList.propTypes = {
  items: object.isRequired,
  className: string
}

export default DescriptionList
