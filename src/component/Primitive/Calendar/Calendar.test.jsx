import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import Calendar from '.'

const requiredProps = () => ({})

describe('Component: Calendar', () => {
  // test('should return errors if required props missing', () => {
  //   // eslint-disable-next-line react/forbid-foreign-prop-types
  //   const actual = validatePropTypes(Calendar.propTypes, {})
  //   const expected = {}
  //   expect(actual).toEqual(expected)
  // })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Calendar.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  // test('should output the expected markup with default props', () => {
  //   const { getByText, queryAllByRole } = render(
  //     <Calendar {...requiredProps()} />
  //   )
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
