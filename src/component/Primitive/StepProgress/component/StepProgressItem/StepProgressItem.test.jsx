import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import StepProgressItem from '.'

const requiredProps = () => ({
  children: 'Default content'
})

describe('Component: StepProgressItem', function () {
  test('should return errors if required props missing', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(StepProgressItem.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(
      StepProgressItem.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<StepProgressItem {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output the expected class when `complete` prop passed', () => {
    const { getByText } = render(
      <StepProgressItem {...requiredProps()} complete />
    )
    expect(getByText('Default content')).toHaveClass('complete')
  })

  test('should output the expected class when `current` prop passed', () => {
    const { getByText } = render(
      <StepProgressItem {...requiredProps()} current />
    )
    expect(getByText('Default content')).toHaveClass('current')
  })

  test('should output the expected class when `status` prop passed', () => {
    const { getByText } = render(
      <StepProgressItem {...requiredProps()} status="positive" />
    )
    expect(getByText('Default content')).toHaveClass('positive')
  })
})
