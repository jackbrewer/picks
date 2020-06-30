import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import ShrinkWrapItem from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: ShrinkWrapItem', function () {
  validateRequiredProps(ShrinkWrapItem, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<ShrinkWrapItem {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('ShrinkWrapItem')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output additional className when `noWrap` prop passed', function () {
    const wrapper = shallow(<ShrinkWrapItem {...requiredProps()} noWrap />)
    expect(wrapper.prop('className')).toEqual('ShrinkWrapItem noWrap')
  })

  test('should output additional className when `shrink` prop passed', function () {
    const wrapper = shallow(<ShrinkWrapItem {...requiredProps()} shrink />)
    expect(wrapper.prop('className')).toEqual('ShrinkWrapItem shrink')
  })

  test('should output additional className when `spacing` prop passed', function () {
    const wrapper = shallow(
      <ShrinkWrapItem {...requiredProps()} spacing="comfortable" />
    )
    expect(wrapper.prop('className')).toEqual('ShrinkWrapItem comfortable')
  })

  test('should output additional className when `vAlign` prop passed', function () {
    const wrapper = shallow(
      <ShrinkWrapItem {...requiredProps()} vAlign="top" />
    )
    expect(wrapper.prop('className')).toEqual('ShrinkWrapItem top')
  })
})
