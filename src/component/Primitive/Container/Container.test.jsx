import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import Container from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Container', function () {
  validateRequiredProps(Container, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<Container {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Container')
    expect(wrapper.dive().text()).toEqual('Default content')
  })

  test('should output additional className when `center` prop passed', function () {
    const wrapper = shallow(<Container {...requiredProps()} center />)
    expect(wrapper.prop('className')).toEqual('Container center')
  })

  test('should output additional className when `gutter` prop passed', function () {
    const wrapper = shallow(<Container {...requiredProps()} gutter />)
    expect(wrapper.prop('className')).toEqual('Container gutter')
  })

  test('should output additional className when `size` prop passed', function () {
    const wrapper = shallow(<Container {...requiredProps()} size="small" />)
    expect(wrapper.prop('className')).toEqual('Container small')
  })

  test('should output additional className when `noClearfix` prop passed', function () {
    const wrapper = shallow(<Container {...requiredProps()} noClearfix />)
    expect(wrapper.prop('className')).toEqual('Container noClearfix')
  })
})
