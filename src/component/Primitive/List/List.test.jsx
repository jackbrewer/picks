import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import List from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: List', function () {
  validateRequiredProps(List, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<List {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('List')
    expect(wrapper.type()).toEqual('ul')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output additional className when `inline` prop passed', function () {
    const wrapper = shallow(<List {...requiredProps()} inline />)
    expect(wrapper.prop('className')).toEqual('List inline')
  })

  test('should output additional className when `unstyled` prop passed', function () {
    const wrapper = shallow(<List {...requiredProps()} unstyled />)
    expect(wrapper.prop('className')).toEqual('List unstyled')
  })

  test('should output as `ol` when `ordered` prop passed', function () {
    const wrapper = shallow(<List {...requiredProps()} ordered />)
    expect(wrapper.prop('className')).toEqual('List')
    expect(wrapper.type()).toEqual('ol')
  })
})
