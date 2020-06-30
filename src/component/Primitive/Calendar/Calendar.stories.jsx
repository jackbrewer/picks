import React from 'react'
import { storiesOf } from '@storybook/react'
import { addDays } from 'date-fns'

import Calendar from '.'

const stories = storiesOf('Specific/Calendar', module)

stories.add('Info', () => <Calendar />, {
  info: {
    inline: true,
    text: `
      TBC
    `
  }
})

stories.add('Default state', () => <Calendar />)

stories.add('Custom initial date', () => (
  <Calendar initialDate={new Date('1985-01-01')} />
))

stories.add('Custom earliest date', () => (
  <Calendar
    initialDate={new Date('2020-05-12')}
    rangeStart={new Date('2020-05-12')}
  />
))

stories.add('Custom latest date', () => (
  <Calendar
    initialDate={new Date('2020-05-12')}
    rangeEnd={new Date('2020-05-16')}
  />
))

stories.add('Custom date range', () => (
  <Calendar
    initialDate={new Date('2020-05-12')}
    rangeStart={new Date('2020-05-12')}
    rangeEnd={new Date('2020-05-16')}
  />
))

stories.add('Disabled dates', () => (
  <Calendar
    disabledDates={[
      addDays(new Date(), 2),
      addDays(new Date(), 4),
      addDays(new Date(), 10),
      addDays(new Date(), 40)
    ]}
  />
))

stories.add('Selected dates', () => (
  <Calendar
    selectedDates={[
      addDays(new Date(), 2),
      addDays(new Date(), 4),
      addDays(new Date(), 10),
      addDays(new Date(), 40)
    ]}
  />
))

stories.add('Selected/Disabled dates', () => (
  <Calendar
    selectedDates={[
      addDays(new Date(), 2),
      addDays(new Date(), 4),
      addDays(new Date(), 10),
      addDays(new Date(), 40)
    ]}
    disabledDates={[
      addDays(new Date(), 2),
      addDays(new Date(), 4),
      addDays(new Date(), 10),
      addDays(new Date(), 40)
    ]}
  />
))
