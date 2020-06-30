import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import Type from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Type', function () {
  validateRequiredProps(Type, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<Type {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Type base')
    expect(wrapper.dive().text()).toEqual('Default content')
    expect(wrapper.dive().type()).toEqual('div')
  })

  test('should output as expected element when `as` prop passed', function () {
    const wrapper = shallow(<Type {...requiredProps()} as="h1" />)
    expect(wrapper.prop('className')).toEqual('Type base')
    expect(wrapper.dive().type()).toEqual('h1')
  })

  test('should output additional className when `size` prop passed', function () {
    const wrapper = shallow(<Type {...requiredProps()} size="title" />)
    expect(wrapper.prop('className')).toEqual('Type title')
  })

  test('should output additional className when `tight` prop passed', function () {
    const wrapper = shallow(<Type {...requiredProps()} tight />)
    expect(wrapper.prop('className')).toEqual('Type base tight')
  })
})
