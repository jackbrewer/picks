import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import Stack from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Stack', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Stack.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Stack.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<Stack {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Stack')
    expect(wrapper.text()).toEqual('Default content')
  })
})
