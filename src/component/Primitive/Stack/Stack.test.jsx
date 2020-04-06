import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import Stack from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Stack', function () {
  test('should return errors if required props missing', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Stack.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Stack.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<Stack {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output the expected markup with multiple children', () => {
    const { getAllByRole } = render(
      <Stack>
        <button />
        <button />
        <button />
      </Stack>
    )
    expect(getAllByRole('button')).toHaveLength(3)
  })
})
