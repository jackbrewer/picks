import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import ClickableControlWrapper from '.'

const requiredProps = () => ({
  control: <input />,
  label: 'Default label',
  onClick: () => {}
})

describe('Component: ClickableControlWrapper', () => {
  test('should return errors if required props missing', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ClickableControlWrapper.propTypes, {})
    const expected = {
      control:
        'The prop `control` is marked as required in `Component`, but its value is `undefined`.',
      label:
        'The prop `label` is marked as required in `Component`, but its value is `undefined`.',
      onClick:
        'The prop `onClick` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(
      ClickableControlWrapper.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', () => {
    const { getByRole, getByText } = render(
      <ClickableControlWrapper {...requiredProps()} />
    )
    expect(getByText('Default label')).toBeTruthy()
    expect(getByRole('button')).toBeTruthy()
  })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<ClickableControlWrapper {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})
