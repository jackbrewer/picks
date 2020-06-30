import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import Ellipsis from './'

const requiredProps = () => ({ children: 'Example content' })

describe('Component: Ellipsis', function () {
  validateRequiredProps(Ellipsis, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<Ellipsis {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Ellipsis')
  })

  test('should output additional styles if `maxWidth` set', function () {
    const wrapper = shallow(<Ellipsis {...requiredProps()} maxWidth={200} />)
    expect(wrapper.prop('style')).toEqual({ maxWidth: 200 })
    wrapper.setProps({ maxWidth: '20%' })
    expect(wrapper.prop('style')).toEqual({ maxWidth: '20%' })
  })
})
