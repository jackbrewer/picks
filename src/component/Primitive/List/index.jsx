import React from 'react'
import { bool, node, string } from 'prop-types'
import classNames from 'classnames'

import styles from './List.module.scss'

const List = props => {
  const { children, className, inline, ordered, unstyled } = props
  const ListEl = ordered ? 'ol' : 'ul'

  return (
    <ListEl
      className={classNames(
        styles.List,
        inline && styles.inline,
        unstyled && styles.unstyled,
        className
      )}
    >
      {children}
    </ListEl>
  )
}

List.propTypes = {
  children: node.isRequired,
  className: string,
  inline: bool,
  ordered: bool,
  unstyled: bool
}

export default List
