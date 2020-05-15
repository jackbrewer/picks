import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render, fireEvent } from '@testing-library/react'
import Modal from '.'

const requiredProps = () => ({
  ariaLabel: 'Example Label',
  children: 'Default content'
})

describe('Component: Modal', () => {
  test('should return errors if required props missing', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Modal.propTypes, {})
    const expected = {
      ariaLabel:
        'The prop `ariaLabel` is marked as required in `Component`, but its value is `undefined`.',
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Modal.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output nothing without `open` prop', () => {
    const { queryByRole, queryByText } = render(<Modal {...requiredProps()} />)
    expect(queryByRole('dialog')).toBeNull()
    expect(queryByText('Default content')).toBeNull()
  })

  test('should output the expected markup with default props', () => {
    const { getByRole, getByText } = render(<Modal {...requiredProps()} open />)
    expect(getByRole('dialog')).toBeTruthy()
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should trigger `onClose` prop when required', () => {
    const handleClose = jest.fn()
    const { getByRole, getByLabelText } = render(
      <Modal {...requiredProps()} open onClose={handleClose} />
    )
    expect(getByRole('dialog')).toBeTruthy()
    fireEvent.click(getByLabelText('Close Modal'))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
