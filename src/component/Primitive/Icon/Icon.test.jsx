import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'

import Icon from './'

const requiredProps = () => ({
  type: '_Placeholder'
})

describe('Component: Icon', function() {
  test('should return errors if invalid default props passed', function() {
    const actual = validatePropTypes(Icon.propTypes, {})
    const expected = {
      type:
        'The prop `type` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
    expect(Object.keys(actual)).toHaveLength(1)
  })

  test('shouldn’t error if valid default props passed', function() {
    const actual = validatePropTypes(Icon.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should render as expected with required props', function() {
    const wrapper = shallow(<Icon {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Icon')
    // expect(wrapper.find('svg')).toHaveLength(1)
    expect(wrapper.prop('style').width).toEqual('24px')
    expect(wrapper.prop('style').height).toEqual('24px')
    expect(wrapper.prop('aria-hidden')).toEqual('true')
  })

  test('should allow custom class names to be passed', function() {
    const wrapper = shallow(
      <Icon {...requiredProps()} className="additional-class foo" />
    )
    expect(wrapper.prop('className')).toEqual('Icon additional-class foo')
  })

  test('should allow custom width to be passed', function() {
    const wrapper = shallow(<Icon {...requiredProps()} width={100} />)
    expect(wrapper.prop('style').width).toEqual('100px')
    expect(wrapper.prop('style').height).toEqual('100px')
  })

  test('should allow custom height to be passed', function() {
    const wrapper = shallow(<Icon {...requiredProps()} height={100} />)
    expect(wrapper.prop('style').width).toEqual('100px')
    expect(wrapper.prop('style').height).toEqual('100px')
  })

  test('should allow custom width and height to be passed', function() {
    const wrapper = shallow(
      <Icon {...requiredProps()} width={100} height={100} />
    )
    expect(wrapper.prop('style').width).toEqual('100px')
    expect(wrapper.prop('style').height).toEqual('100px')
  })

  test('should allow a11yText to be passed', function() {
    const wrapper = shallow(
      <Icon {...requiredProps()} a11yText="Example Text" />
    )
    expect(wrapper.prop('role')).toEqual('img')
    expect(wrapper.prop('aria-label')).toEqual('Example Text')
    expect(wrapper.prop('aria-hidden')).toEqual(undefined)
  })
})
