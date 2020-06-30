import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import Position from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Position', function () {
  validateRequiredProps(Position, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<Position {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Position static')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output the expected class when `absolute`', function () {
    const wrapper = shallow(<Position {...requiredProps()} absolute />)
    expect(wrapper.prop('className')).toEqual('Position absolute')
  })

  test('should output the expected class when `fixed`', function () {
    const wrapper = shallow(<Position {...requiredProps()} fixed />)
    expect(wrapper.prop('className')).toEqual('Position fixed')
  })

  test('should output the expected class when `relative`', function () {
    const wrapper = shallow(<Position {...requiredProps()} relative />)
    expect(wrapper.prop('className')).toEqual('Position relative')
  })

  test('should output the expected class when `sticky`', function () {
    const wrapper = shallow(<Position {...requiredProps()} sticky />)
    expect(wrapper.prop('className')).toEqual('Position sticky')
  })

  test('should allow additional styles to be passed', function () {
    const wrapper = shallow(
      <Position
        {...requiredProps()}
        style={{ top: '10px', right: 20, zIndex: 1 }}
      />
    )
    expect(wrapper.html()).toEqual(
      '<div class="Position static" style="top:10px;right:20px;z-index:1">Default content</div>'
    )
  })
})
