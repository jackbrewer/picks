import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import VisuallyHidden from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: VisuallyHidden', function () {
  validateRequiredProps(VisuallyHidden, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<VisuallyHidden {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('VisuallyHidden')
    expect(wrapper.text()).toEqual('Default content')
  })
})
