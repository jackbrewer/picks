import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import Swatch from '.'

const requiredProps = () => ({ color: '#123456' })

describe('Component: Swatch', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Swatch.propTypes, {})
    const expected = {
      color:
        'The prop `color` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Swatch.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<Swatch {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Swatch')
    expect(wrapper.find('li').length).toEqual(3)
  })

  // test('should output additional className when `foo` prop passed', function() {
  //   const wrapper = shallow(<Swatch {...requiredProps()} foo />)
  //   expect(wrapper.prop('className')).toEqual('Swatch foo')
  // })
})
