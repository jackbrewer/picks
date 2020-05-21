import React from 'react'
import { func, string } from 'prop-types'
import classNames from 'classnames'

import styles from './CalendarHeader.module.scss'
import Icon from '../../../Icon'

const CalendarHeader = ({ onNext, onPrevious, title }) => (
  <div className={styles.CalendarHeader}>
    <div className={styles.CalendarHeaderHeading}>{title}</div>

    {onPrevious && (
      <div
        className={classNames(
          styles.CalendarHeaderLink,
          styles.CalendarHeaderLinkPrevious
        )}
      >
        <button type="button" onClick={onPrevious}>
          <Icon type="navigate-previous" a11yText="Previous Month" />
        </button>
      </div>
    )}

    {onNext && (
      <div
        className={classNames(
          styles.CalendarHeaderLink,
          styles.CalendarHeaderLinkNext
        )}
      >
        <button type="button" onClick={onNext}>
          <Icon type="navigate-next" a11yText="Next Month" />
        </button>
      </div>
    )}
  </div>
)

CalendarHeader.propTypes = {
  onNext: func,
  onPrevious: func,
  title: string.isRequired
}

export default CalendarHeader
