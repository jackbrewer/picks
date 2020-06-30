import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import Floater from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Floater', function () {
  validateRequiredProps(Floater, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<Floater {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Floater')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output additional className when `align` prop passed', function () {
    const wrapper = shallow(<Floater {...requiredProps()} align="left" />)
    expect(wrapper.prop('className')).toEqual('Floater left')
  })

  test('should output additional className when `size` prop passed', function () {
    const wrapper = shallow(<Floater {...requiredProps()} size="medium" />)
    expect(wrapper.prop('className')).toEqual('Floater medium')
  })
})
