import calendarDatesFormatter from './calendar-dates-formatter'
import fixtureBasic from './fixture/basic'
import fixtureComplete from './fixture/complete'

describe('calendarDatesFormatter', function () {
  test('should return expected date formats with minimal options', function () {
    expect(
      calendarDatesFormatter({
        date: new Date('2020-05-20')
      })
    ).toEqual(fixtureBasic)
  })
  test('should return expected date formats with all options', function () {
    expect(
      calendarDatesFormatter({
        date: new Date('2020-05-20'),
        selectedDates: [new Date('2020-05-14')],
        disabledDates: [new Date('2020-05-10'), new Date('2020-05-11')],
        rangeStart: new Date('2020-05-5'),
        rangeEnd: new Date('2020-05-27'),
        today: new Date('2020-05-20')
      })
    ).toEqual(fixtureComplete)
  })
})
