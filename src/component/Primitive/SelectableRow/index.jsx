import React from 'react'
import { func, node, oneOf, string } from 'prop-types'

import styles from './SelectableRow.module.scss'

import Icon from '../Icon'

const SelectableRow = ({ children, name, type, value, onChange }) => (
  <label className={styles.SelectableRow}>
    <input
      type={type}
      name={name}
      className={styles.SelectableItemControl}
      value={value}
      {...(onChange && { onChange })}
    />

    <div className={styles.SelectableItemInner}>
      <div className={styles.SelectableItemContent}>{children}</div>
      <div className={styles.SelectableItemIndicator}>
        <Icon type="check" />
      </div>
    </div>
  </label>
)

SelectableRow.defaultProps = {
  type: 'checkbox'
}

SelectableRow.propTypes = {
  children: node.isRequired,
  name: string.isRequired,
  onChange: func,
  type: oneOf(['checkbox', 'radio']),
  value: string.isRequired
}

export default SelectableRow
