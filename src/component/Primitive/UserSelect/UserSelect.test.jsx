import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import UserSelect from '.'

import Element from '../Element'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: UserSelect', function () {
  validateRequiredProps(UserSelect, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<UserSelect {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('auto')
    expect(wrapper.type()).toEqual(Element)
    expect(wrapper.childAt(0).text()).toEqual('Default content')
  })

  test('should output the expected markup with `all` prop set', function () {
    const wrapper = shallow(<UserSelect {...requiredProps()} all />)
    expect(wrapper.prop('className')).toEqual('all')
  })

  test('should output the expected markup with `none` prop set', function () {
    const wrapper = shallow(<UserSelect {...requiredProps()} none />)
    expect(wrapper.prop('className')).toEqual('none')
  })

  test('should output the expected markup with `text` prop set', function () {
    const wrapper = shallow(<UserSelect {...requiredProps()} text />)
    expect(wrapper.prop('className')).toEqual('text')
  })
})
