import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import StepProgressWrapper from '.'
import StepProgress from '../..'

const requiredProps = () => ({
  children: <StepProgress.Item>Default content</StepProgress.Item>
})

describe('Component: StepProgressWrapper', function () {
  test('should return errors if required props missing', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(StepProgressWrapper.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(
      StepProgressWrapper.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<StepProgressWrapper {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })
})
