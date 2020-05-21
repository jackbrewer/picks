import {
  eachDayOfInterval,
  endOfDay,
  endOfISOWeek,
  endOfMonth,
  isAfter,
  isBefore,
  isSameDay,
  format,
  isSameMonth,
  startOfDay,
  startOfISOWeek,
  startOfMonth
} from 'date-fns'

const dateInArray = ({ date, arr = [] }) => {
  if (!arr.length) return false
  return !!arr.find((day) => isSameDay(day, date))
}

const outOfRange = ({ date, rangeStart, rangeEnd }) => {
  if (rangeStart && isBefore(startOfDay(date), startOfDay(rangeStart))) {
    return true
  }
  if (rangeEnd && isAfter(endOfDay(date), endOfDay(rangeEnd))) {
    return true
  }
  return false
}

const formatDates = ({
  date: passedDate,
  selectedDates,
  disabledDates,
  rangeStart,
  rangeEnd,
  today
}) => {
  const days = eachDayOfInterval({
    start: startOfISOWeek(startOfMonth(passedDate)),
    end: endOfISOWeek(endOfMonth(passedDate))
  })

  const formattedDays = days.map((date) => ({
    date,
    today: isSameDay(date, today),
    overlapping: !isSameMonth(date, passedDate),
    outOfRange: outOfRange({ date, rangeStart, rangeEnd }),
    selected: dateInArray({ date, arr: selectedDates }),
    disabled: dateInArray({ date, arr: disabledDates }),
    formats: {
      number: format(date, 'd'),
      full: format(date, 'd MMMM yyyy'),
      iso: format(date, 'yyyy-MM-dd')
    }
  }))

  return formattedDays
}

export default formatDates
