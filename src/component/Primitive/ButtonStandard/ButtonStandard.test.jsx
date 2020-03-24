import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ButtonStandard from '.'

const requiredProps = () => ({})

const defaultProps = () => ({ children: 'Example content' })

describe('Component: ButtonStandard', function() {
  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ButtonStandard.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const { getByRole, getByText } = render(
      <ButtonStandard {...requiredProps()} {...defaultProps()} />
    )
    expect(getByRole('button')).toBeTruthy()
    expect(getByText('Example content')).toBeTruthy()
  })

  test('should output additional className when `disabled` prop passed', function() {
    const { getByRole } = render(
      <ButtonStandard {...requiredProps()} {...defaultProps()} disabled />
    )
    expect(getByRole('button')).toBeDisabled()
    expect(getByRole('button')).toHaveClass('disabled')
  })
})
