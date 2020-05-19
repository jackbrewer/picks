import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import DateCard from '.'

const requiredProps = () => ({
  primary: 'Jan',
  secondary: '2',
  timestamp: '2020-01-02'
})

describe('Component: DateCard', () => {
  test('should return errors if required props missing', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(DateCard.propTypes, {})
    const expected = {
      primary:
        'The prop `primary` is marked as required in `Component`, but its value is `undefined`.',
      secondary:
        'The prop `secondary` is marked as required in `Component`, but its value is `undefined`.',
      timestamp:
        'The prop `timestamp` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(DateCard.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', () => {
    const { container, getByText } = render(<DateCard {...requiredProps()} />)
    expect(getByText('Jan')).toBeTruthy()
    expect(getByText('2')).toBeTruthy()
    expect(container.firstChild).toHaveAttribute('datetime', '2020-01-02')
  })
})
