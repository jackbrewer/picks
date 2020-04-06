import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ButtonBase from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: ButtonBase', function () {
  test('should return errors if required props missing', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ButtonBase.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ButtonBase.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function () {
    const { getByRole, getByText } = render(<ButtonBase {...requiredProps()} />)
    expect(getByRole('button')).toBeTruthy()
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional styles when `block` prop passed', function () {
    const { getByRole } = render(<ButtonBase {...requiredProps()} block />)
    expect(getByRole('button')).toHaveClass('block')
  })

  test('should output additional styles and attribute when `disabled` prop passed', function () {
    const { getByRole } = render(<ButtonBase {...requiredProps()} disabled />)
    expect(getByRole('button')).toBeDisabled()
    expect(getByRole('button')).toHaveClass('disabled')
  })

  test('should pass additional props to SmartLink', function () {
    const { getByTitle } = render(
      <ButtonBase {...requiredProps()} title="Example Title" />
    )
    expect(getByTitle('Example Title')).toBeTruthy()
  })
})
