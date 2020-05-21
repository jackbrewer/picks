import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import LoadingOverlay from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: LoadingOverlay', () => {
  test('should return errors if required props missing', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(LoadingOverlay.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(LoadingOverlay.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', () => {
    const { getByText, queryByText } = render(
      <LoadingOverlay {...requiredProps()} />
    )
    expect(getByText('Default content')).toBeTruthy()
    expect(queryByText('Loading…')).toBeNull()
  })

  test('should output the expected markup with default props', () => {
    const { getByText } = render(
      <LoadingOverlay {...requiredProps()} loading />
    )
    expect(getByText('Loading…')).toBeTruthy()
  })
})
