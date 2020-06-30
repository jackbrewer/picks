import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render, fireEvent } from '@testing-library/react'
import CalendarItem from '.'

const requiredProps = () => ({
  date: new Date('2012-05-20'),
  formats: { number: '20', full: '20 May 2020' }
})

describe('Component: CalendarItem', () => {
  validateRequiredProps(CalendarItem, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText, getByTitle, getByRole } = render(
      <CalendarItem {...requiredProps()} />
    )
    // expect(getByText('Default content')).toBeTruthy()
    expect(getByRole('listitem')).toBeTruthy()
    expect(getByRole('button')).toBeTruthy()
    expect(getByText('20')).toBeTruthy()
    expect(getByTitle('20 May 2020')).toBeTruthy()
  })

  test('should trigger `onSelected` prop when required', () => {
    const handleSelection = jest.fn()
    const { getByRole } = render(
      <CalendarItem {...requiredProps()} onSelection={handleSelection} />
    )
    fireEvent.click(getByRole('button'))
    expect(handleSelection).toHaveBeenCalledTimes(1)
  })

  test('should output the expected markup when `selected` prop passed', () => {
    const { getByTitle } = render(
      <CalendarItem {...requiredProps()} selected />
    )
    expect(getByTitle('20 May 2020 - selected')).toBeTruthy()
  })

  test('should output the expected markup when `today` prop passed', () => {
    const { getByTitle } = render(<CalendarItem {...requiredProps()} today />)
    expect(getByTitle('20 May 2020 (today)')).toBeTruthy()
  })

  test('should output the expected markup when `outOfRange` prop passed', () => {
    const { container, queryByRole } = render(
      <CalendarItem {...requiredProps()} outOfRange />
    )
    expect(queryByRole('listitem')).toBeNull()
    expect(container.querySelector('button')).toBeDisabled()
  })

  test('should output the expected markup when `disabled` prop passed', () => {
    const { getByRole, getByTitle } = render(
      <CalendarItem {...requiredProps()} disabled />
    )
    expect(getByRole('button')).toBeDisabled()
    expect(getByTitle('20 May 2020 - unavailable')).toBeTruthy()
  })
})
