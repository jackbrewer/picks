import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import CheckControlText from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: CheckControlText', function () {
  test('should return errors if required props missing', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(CheckControlText.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(
      CheckControlText.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<CheckControlText {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })
})
