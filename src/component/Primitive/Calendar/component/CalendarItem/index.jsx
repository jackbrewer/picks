import React from 'react'
import classNames from 'classnames'
import { bool, func, object } from 'prop-types'

import styles from './CalendarItem.module.scss'

const CalendarItem = (props) => {
  const {
    date,
    disabled,
    formats,
    onSelection,
    outOfRange,
    overlapping,
    selected,
    today
  } = props

  const getTitle = () => {
    if (outOfRange || overlapping) return null
    const title = [formats.full]
    if (today) title.push(' (today)')
    if (selected) title.push(' - selected')
    if (disabled) title.push(' - unavailable')
    return title.join('')
  }

  return (
    <li
      className={classNames(
        styles.CalendarItem,
        disabled && styles.disabled,
        outOfRange && styles.outOfRange,
        overlapping && styles.overlapping,
        selected && styles.selected,
        today && styles.today
      )}
      {...((outOfRange || overlapping) && { 'aria-hidden': 'true' })}
    >
      <button
        className={styles.CalendarItemButton}
        disabled={disabled || outOfRange || overlapping}
        onClick={disabled || outOfRange ? null : () => onSelection(date)}
        title={getTitle()}
      >
        <span className={styles.CalendarItemNumber} aria-hidden>
          {formats.number}
        </span>
      </button>
    </li>
  )
}

CalendarItem.displayName = 'CalendarItem'

CalendarItem.propTypes = {
  date: object.isRequired,
  disabled: bool,
  formats: object.isRequired,
  onSelection: func,
  outOfRange: bool,
  overlapping: bool,
  selected: bool,
  today: bool
}

export default CalendarItem
