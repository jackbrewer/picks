import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render, fireEvent } from '@testing-library/react'
import CalendarWrapper from '.'

const requiredProps = () => ({})

describe('Component: CalendarWrapper', () => {
  validateRequiredProps(CalendarWrapper, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getAllByRole, getByText } = render(
      <CalendarWrapper
        {...requiredProps()}
        initialDate={new Date('2020-05-20')}
      />
    )
    expect(getByText('May 2020')).toBeTruthy()
    expect(getAllByRole('listitem')).toHaveLength(31)
  })

  test('should move to the next month as expected', () => {
    const { getAllByRole, getByLabelText, getByText } = render(
      <CalendarWrapper
        {...requiredProps()}
        initialDate={new Date('2020-05-20')}
      />
    )
    fireEvent.click(getByLabelText('Next Month'))
    expect(getByText('June 2020')).toBeTruthy()
    expect(getAllByRole('listitem')).toHaveLength(30)
  })

  test('should move to the previous month as expected', () => {
    const { getAllByRole, getByLabelText, getByText } = render(
      <CalendarWrapper
        {...requiredProps()}
        initialDate={new Date('2020-05-20')}
      />
    )
    fireEvent.click(getByLabelText('Previous Month'))
    expect(getByText('April 2020')).toBeTruthy()
    expect(getAllByRole('listitem')).toHaveLength(30)
  })
})
