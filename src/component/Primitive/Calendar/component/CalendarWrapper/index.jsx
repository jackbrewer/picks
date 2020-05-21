import React, { useState } from 'react'
import { arrayOf, func, object, string } from 'prop-types'
import { addMonths, format, isSameMonth } from 'date-fns'

import styles from './CalendarWrapper.module.scss'

import calendarDatesFormatter from '../../lib/calendar-dates-formatter'

import CalendarHeader from '../CalendarHeader'
import CalendarItem from '../CalendarItem'

const CalendarWrapper = ({
  initialDate,
  disabledDates,
  dayNames,
  rangeStart,
  rangeEnd,
  selectedDates,
  onSelection
}) => {
  const [date, updateDate] = useState(initialDate)

  const onNext = () => {
    updateDate(addMonths(date, 1))
  }

  const onPrevious = () => {
    updateDate(addMonths(date, -1))
  }

  const formattedDates = calendarDatesFormatter({
    date,
    disabledDates,
    rangeStart,
    rangeEnd,
    selectedDates,
    today: new Date()
  })

  const hidePreviousMonth = isSameMonth(rangeStart, date)
  const hideNextMonth = isSameMonth(rangeEnd, date)

  return (
    <div className={styles.CalendarWrapper}>
      <CalendarHeader
        title={format(date, 'MMMM yyyy')}
        onNext={hideNextMonth ? null : onNext}
        onPrevious={hidePreviousMonth ? null : onPrevious}
      />

      <ul className={styles.CalendarWrapperNames} aria-hidden>
        {dayNames.map((dayName) => (
          <li key={dayName} className={styles.CalendarWrapperName}>
            {dayName}
          </li>
        ))}
      </ul>

      <ul className={styles.CalendarWrapperDates}>
        {formattedDates.map((day) => (
          <CalendarItem
            key={day.formats.iso}
            onSelection={onSelection}
            {...day}
          />
        ))}
      </ul>
    </div>
  )
}

CalendarWrapper.defaultProps = {
  initialDate: new Date(),
  dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  onSelection: () => {}
}

CalendarWrapper.propTypes = {
  rangeStart: object,
  rangeEnd: object,
  initialDate: object,
  dayNames: arrayOf(string),
  selectedDates: arrayOf(object),
  onSelection: func,
  disabledDates: arrayOf(object)
}

export default CalendarWrapper
