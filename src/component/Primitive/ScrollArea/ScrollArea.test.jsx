import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import ScrollArea from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: ScrollArea', function () {
  validateRequiredProps(ScrollArea, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<ScrollArea {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('ScrollArea vertical')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output the expected markup `horizontal` axis', function () {
    const wrapper = shallow(<ScrollArea {...requiredProps()} horizontal />)
    expect(wrapper.prop('className')).toEqual('ScrollArea horizontal')
  })

  test('should output additional className when `hideScrollbar` prop passed', function () {
    const wrapper = shallow(<ScrollArea {...requiredProps()} hideScrollbar />)
    expect(wrapper.prop('className')).toEqual(
      'ScrollArea hideScrollbar vertical'
    )
  })
})
