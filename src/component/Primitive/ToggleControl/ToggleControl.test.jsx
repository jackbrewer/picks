import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ToggleControl from '.'

const requiredProps = () => ({ name: 'exampleName', value: 'exampleValue' })

describe('Component: ToggleControl', () => {
  test('should return errors if required props missing', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ToggleControl.propTypes, {})
    const expected = {
      name:
        'The prop `name` is marked as required in `Component`, but its value is `undefined`.',
      value:
        'The prop `value` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ToggleControl.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', () => {
    const { getByRole } = render(<ToggleControl {...requiredProps()} />)
    expect(getByRole('checkbox')).toBeTruthy()
  })

  test('should output the expected markup with `loading` prop', () => {
    const { getByText } = render(<ToggleControl {...requiredProps()} loading />)
    expect(getByText('Loading…')).toBeTruthy()
  })

  test('should output the expected markup with `disabled` prop', () => {
    const { getByRole } = render(
      <ToggleControl {...requiredProps()} disabled />
    )
    expect(getByRole('checkbox')).toBeDisabled()
  })

  test('should output additional className when `status` prop passed', () => {
    const { container } = render(
      <ToggleControl {...requiredProps()} status="notice" />
    )
    expect(container.firstChild).toHaveClass('notice')
  })

  test('should output the expected markup with custom text labels', () => {
    const { container } = render(
      <ToggleControl
        {...requiredProps()}
        textChecked="On"
        textUnchecked="Off"
      />
    )
    expect(container.querySelector('.ToggleControlFrame')).toHaveAttribute(
      'data-text-checked',
      'On'
    )
    expect(container.querySelector('.ToggleControlFrame')).toHaveAttribute(
      'data-text-unchecked',
      'Off'
    )
  })
})
