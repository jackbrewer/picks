import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import A11yNavigation from '.'

const requiredProps = () => ({
  children: [
    <a key="1" href="#content">
      Jump to main content
    </a>,
    <a key="2" href="#navigation">
      Jump to primary navigation
    </a>
  ]
})

describe('Component: A11yNavigation', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(A11yNavigation.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(A11yNavigation.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const { getByText, getAllByRole } = render(
      <A11yNavigation {...requiredProps()} />
    )
    expect(getAllByRole('link')).toHaveLength(2)
    expect(getByText('Jump to main content')).toBeTruthy()
    expect(getByText('Jump to primary navigation')).toBeTruthy()
  })
})
