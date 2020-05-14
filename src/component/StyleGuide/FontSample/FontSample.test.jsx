import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import FontSample from '.'

const requiredProps = () => ({ stack: 'Comic Sans, cursive' })

describe('Component: FontSample', () => {
  test('should return errors if required props missing', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(FontSample.propTypes, {})
    const expected = {
      stack:
        'The prop `stack` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(FontSample.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<FontSample {...requiredProps()} />)
    expect(getByText('Font Sample: Comic Sans, cursive')).toBeTruthy()
    expect(getByText('AaBb')).toHaveStyle({ fontFamily: 'Comic Sans, cursive' })
  })

  test('should output a custom display name if provided', () => {
    const { getByText } = render(
      <FontSample {...requiredProps()} name="Example Name" />
    )
    expect(getByText('Font Sample: Example Name')).toBeTruthy()
    expect(getByText('AaBb')).toHaveStyle({ fontFamily: 'Comic Sans, cursive' })
  })
})
