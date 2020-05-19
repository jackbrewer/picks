import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import InlineGroup from '.'

const requiredProps = () => ({
  children: [<button key="1">One</button>, <button key="2">Two</button>]
})

describe('Component: InlineGroup', () => {
  test('should return errors if required props missing', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(InlineGroup.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(InlineGroup.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', () => {
    const { getAllByRole } = render(<InlineGroup {...requiredProps()} />)
    expect(getAllByRole('button')).toHaveLength(2)
  })

  test('should output the expected markup with default props', () => {
    const { container } = render(<InlineGroup {...requiredProps()} block />)
    expect(container.firstChild).toHaveClass('block')
  })

  test('should output the expected markup with default props', () => {
    const { container } = render(<InlineGroup {...requiredProps()} even />)
    expect(container.firstChild).toHaveClass('even')
  })
})
