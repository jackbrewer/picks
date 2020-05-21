import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import CalendarHeader from '.'

const requiredProps = () => ({ title: 'Default content' })

describe('Component: CalendarHeader', () => {
  test('should return errors if required props missing', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(CalendarHeader.propTypes, {})
    const expected = {
      title:
        'The prop `title` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(CalendarHeader.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', () => {
    const { getByText, queryAllByRole } = render(
      <CalendarHeader {...requiredProps()} />
    )
    expect(getByText('Default content')).toBeTruthy()
    expect(queryAllByRole('button')).toHaveLength(0)
  })

  test('should output button with `onPrevious` prop', () => {
    const { getAllByRole, getByLabelText } = render(
      <CalendarHeader {...requiredProps()} onPrevious={() => {}} />
    )
    expect(getAllByRole('button')).toHaveLength(1)
    expect(getByLabelText('Previous Month')).toBeTruthy()
  })

  test('should output button with `onNext` prop', () => {
    const { getAllByRole, getByLabelText } = render(
      <CalendarHeader {...requiredProps()} onNext={() => {}} />
    )
    expect(getAllByRole('button')).toHaveLength(1)
    expect(getByLabelText('Next Month')).toBeTruthy()
  })

  test('should output two buttons with `onNext`/`onPrevious` props', () => {
    const { getAllByRole, getByLabelText } = render(
      <CalendarHeader
        {...requiredProps()}
        onPrevious={() => {}}
        onNext={() => {}}
      />
    )
    expect(getAllByRole('button')).toHaveLength(2)
    expect(getByLabelText('Previous Month')).toBeTruthy()
    expect(getByLabelText('Next Month')).toBeTruthy()
  })
})
