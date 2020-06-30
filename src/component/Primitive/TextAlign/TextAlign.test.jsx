import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import TextAlign from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: TextAlign', function () {
  validateRequiredProps(TextAlign, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<TextAlign {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('TextAlign')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output additional className when `left` prop passed', function () {
    const wrapper = shallow(<TextAlign {...requiredProps()} left />)
    expect(wrapper.prop('className')).toEqual('TextAlign left')
  })

  test('should output additional className when `right` prop passed', function () {
    const wrapper = shallow(<TextAlign {...requiredProps()} right />)
    expect(wrapper.prop('className')).toEqual('TextAlign right')
  })

  test('should output additional className when `center` prop passed', function () {
    const wrapper = shallow(<TextAlign {...requiredProps()} center />)
    expect(wrapper.prop('className')).toEqual('TextAlign center')
  })

  test('should output additional className when `justify` prop passed', function () {
    const wrapper = shallow(<TextAlign {...requiredProps()} justify />)
    expect(wrapper.prop('className')).toEqual('TextAlign justify')
  })
})
