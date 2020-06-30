import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'

import Icon from './'

const requiredProps = () => ({
  a11yText: 'Example text',
  type: '_placeholder'
})

describe('Component: Icon', function () {
  validateRequiredProps(Icon, requiredProps())

  test('should render as expected with required props', function () {
    const wrapper = shallow(<Icon {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Icon')
    expect(wrapper.childAt(0).name()).toEqual('MockSvg')
    expect(wrapper.prop('style').width).toEqual('24px')
    expect(wrapper.prop('style').height).toEqual('24px')
    expect(wrapper.prop('role')).toEqual('img')
    expect(wrapper.prop('aria-label')).toEqual('Example text')
    expect(wrapper.prop('aria-hidden')).toEqual(undefined)
  })

  test('should error if passed an unrecognised type', function () {
    const actual = validatePropTypes(Icon.propTypes, {
      a11yText: 'Example text',
      type: 'not-found'
    })
    const partialExpected =
      'Invalid prop `type` of value `not-found` supplied to `Component`'
    expect(actual.type).toEqual(expect.stringContaining(partialExpected))
  })

  test('should allow custom class names to be passed', function () {
    const wrapper = shallow(
      <Icon {...requiredProps()} className="additional-class foo" />
    )
    expect(wrapper.prop('className')).toEqual('Icon additional-class foo')
  })

  test('should allow custom width to be passed', function () {
    const wrapper = shallow(<Icon {...requiredProps()} width={100} />)
    expect(wrapper.prop('style').width).toEqual('100px')
    expect(wrapper.prop('style').height).toEqual('100px')
  })

  test('should allow custom height to be passed', function () {
    const wrapper = shallow(<Icon {...requiredProps()} height={100} />)
    expect(wrapper.prop('style').width).toEqual('100px')
    expect(wrapper.prop('style').height).toEqual('100px')
  })

  test('should allow custom width and height to be passed', function () {
    const wrapper = shallow(
      <Icon {...requiredProps()} width={100} height={100} />
    )
    expect(wrapper.prop('style').width).toEqual('100px')
    expect(wrapper.prop('style').height).toEqual('100px')
  })

  test('should allow a11yText to be disabled by passing blank string', function () {
    const wrapper = shallow(<Icon {...requiredProps()} a11yText="" />)
    expect(wrapper.prop('aria-hidden')).toEqual('true')
    expect(wrapper.prop('role')).toEqual(undefined)
    expect(wrapper.prop('aria-label')).toEqual(undefined)
  })

  test('should allow custom vertical-alignment to be passed', function () {
    const wrapper = shallow(<Icon {...requiredProps()} vAlign="top" />)
    expect(wrapper.prop('className')).toEqual('Icon top')
    wrapper.setProps({ vAlign: 'bottom' })
    expect(wrapper.prop('className')).toEqual('Icon bottom')
  })
})
