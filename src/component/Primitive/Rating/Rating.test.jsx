import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import Rating from '.'

const requiredProps = () => ({})

const defaultProps = () => ({
  rating: 59,
  total: 100
})

describe('Component: Rating', () => {
  test('should return errors if required props missing', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Rating.propTypes, {})
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Rating.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', () => {
    const { container, getByText } = render(
      <Rating {...requiredProps()} {...defaultProps()} />
    )
    expect(getByText('Rating: 59/100')).toBeTruthy()
    expect(container.querySelectorAll('svg')).toHaveLength(5)
  })
})
