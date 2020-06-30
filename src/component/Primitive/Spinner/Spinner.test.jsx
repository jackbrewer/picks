import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import Spinner from '.'

const requiredProps = () => ({})

describe('Component: Spinner', function () {
  validateRequiredProps(Spinner, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<Spinner {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Spinner')
  })

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<Spinner {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Spinner')
  })

  test('should output additional className when `paused` prop passed', function () {
    const wrapper = shallow(<Spinner {...requiredProps()} paused />)
    expect(wrapper.prop('className')).toEqual('Spinner paused')
  })

  test('should output additional styles when `revealDelay` prop passed', function () {
    const wrapper = shallow(<Spinner {...requiredProps()} revealDelay={1000} />)
    expect(wrapper.prop('style')).toEqual({ animationDelay: '1000ms' })
  })

  test('should output additional styles when `size` prop passed', function () {
    const wrapper = shallow(<Spinner {...requiredProps()} size={30} />)
    expect(wrapper.prop('style')).toEqual({
      height: 30,
      lineHeight: '30px',
      width: 30
    })
  })
})
