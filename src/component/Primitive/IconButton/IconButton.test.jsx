import React from 'react'
import { shallow } from 'enzyme'
import validateRequiredProps from '@/lib/validate-required-props'
import IconButton from './'

const requiredProps = () => ({
  a11yText: '',
  icon: '_placeholder'
})

describe('Component: IconButton', function () {
  validateRequiredProps(IconButton, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<IconButton {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('IconButton')
  })

  test('should output additional styles when `rounded` prop passed', function () {
    const wrapper = shallow(<IconButton {...requiredProps()} rounded />)
    expect(wrapper.prop('className')).toEqual('IconButton rounded')
  })

  test('should output additional styles when `small` prop passed', function () {
    const wrapper = shallow(<IconButton {...requiredProps()} small />)
    expect(wrapper.prop('className')).toEqual('IconButton small')
  })

  test('should output additional styles when `solid` prop passed', function () {
    const wrapper = shallow(<IconButton {...requiredProps()} solid />)
    expect(wrapper.prop('className')).toEqual('IconButton solid')
  })

  test('should output additional styles when `increaseHitArea` prop passed', function () {
    const wrapper = shallow(<IconButton {...requiredProps()} increaseHitArea />)
    expect(wrapper.prop('className')).toEqual('IconButton increaseHitArea')
  })

  test('should output additional content when `children` prop passed', function () {
    const wrapper = shallow(
      <IconButton {...requiredProps()}>Example</IconButton>
    )
    expect(wrapper.find('SmartLink').dive().find('span').text()).toEqual(
      'Example'
    )
  })
})
