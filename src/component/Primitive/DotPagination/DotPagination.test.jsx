import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render, fireEvent } from '@testing-library/react'
import DotPagination from '.'

const requiredProps = () => ({ dots: 3, onChangeIndex: () => {} })

describe('Component: DotPagination', function() {
  test('should return errors if required props missing', async () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(DotPagination.propTypes, {})
    const expected = {
      dots:
        'The prop `dots` is marked as required in `Component`, but its value is `undefined`.',
      onChangeIndex:
        'The prop `onChangeIndex` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', async () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(DotPagination.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', async () => {
    const { getByLabelText, getAllByRole } = render(
      <DotPagination {...requiredProps()} />
    )
    const currentItem = getByLabelText('Current item')
    expect(getByLabelText('Pagination')).toBeTruthy()
    expect(getAllByRole('button')).toHaveLength(3)
    expect(currentItem).toBeTruthy()
    expect(currentItem.getAttribute('disabled')).toBeDefined()
    expect(currentItem.getAttribute('aria-current')).toEqual('true')
    expect(getByLabelText('Go to item 2')).toBeTruthy()
    expect(getByLabelText('Go to item 2').getAttribute('disabled')).toBeNull()
    expect(getByLabelText('Go to item 3')).toBeTruthy()
    expect(getByLabelText('Go to item 3').getAttribute('disabled')).toBeNull()
  })

  test('should output the expected markup if `activeIndex` prop passed', async () => {
    const { getByLabelText } = render(
      <DotPagination {...requiredProps()} activeIndex={2} />
    )
    expect(getByLabelText('Go to item 1')).toBeTruthy()
    expect(getByLabelText('Current item')).toBeTruthy()
    expect(getByLabelText('Current item').getAttribute('aria-current')).toEqual(
      'true'
    )
    expect(getByLabelText('Go to item 2')).toBeTruthy()
  })

  test('should output the custom text when `label*` props passed', async () => {
    const { getByLabelText } = render(
      <DotPagination
        {...requiredProps()}
        labelTitle="Photo Viewer Pagination"
        labelActive="Current photo"
        labelInactive="View photo"
      />
    )
    expect(getByLabelText('Photo Viewer Pagination')).toBeTruthy()
    expect(getByLabelText('Current photo')).toBeTruthy()
    expect(getByLabelText('View photo 2')).toBeTruthy()
    expect(getByLabelText('View photo 3')).toBeTruthy()
  })

  test('should trigger `onChangeIndex` function on button click', function() {
    const mockOnClick = jest.fn()
    const { getByLabelText } = render(
      <DotPagination {...requiredProps()} onChangeIndex={mockOnClick} />
    )
    expect(mockOnClick.mock.calls.length).toBe(0)
    fireEvent.click(getByLabelText('Go to item 2'))
    expect(mockOnClick.mock.calls.length).toBe(1)
  })
})
