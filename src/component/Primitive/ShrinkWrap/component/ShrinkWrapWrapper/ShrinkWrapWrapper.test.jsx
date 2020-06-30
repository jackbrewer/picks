import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import ShrinkWrapWrapper from '.'
import ShrinkWrap from '../..'

const requiredProps = () => ({
  children: <ShrinkWrap.Item>Default content</ShrinkWrap.Item>
})

describe('Component: ShrinkWrapWrapper', function () {
  validateRequiredProps(ShrinkWrapWrapper, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<ShrinkWrapWrapper {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('ShrinkWrapWrapper')
    expect(wrapper.childAt(0).dive().text()).toEqual('Default content')
  })

  test('should output additional className when `fixed` prop passed', function () {
    const wrapper = shallow(<ShrinkWrapWrapper {...requiredProps()} fixed />)
    expect(wrapper.prop('className')).toEqual('ShrinkWrapWrapper fixed')
  })

  test('should output additional className when `fullWidth` prop passed', function () {
    const wrapper = shallow(
      <ShrinkWrapWrapper {...requiredProps()} fullWidth />
    )
    expect(wrapper.prop('className')).toEqual('ShrinkWrapWrapper fullWidth')
  })
})
