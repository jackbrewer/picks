import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import FixedFooter from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: FixedFooter', () => {
  test('should return errors if required props missing', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(FixedFooter.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(FixedFooter.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<FixedFooter {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<FixedFooter {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})
