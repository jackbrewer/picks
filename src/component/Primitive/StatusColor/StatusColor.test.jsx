import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import StatusColor from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: StatusColor', function () {
  validateRequiredProps(StatusColor, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<StatusColor {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('StatusColor')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output additional className when `status` prop passed', function () {
    const wrapper = shallow(
      <StatusColor {...requiredProps()} status="notice" />
    )
    expect(wrapper.prop('className')).toEqual('StatusColor notice')
  })
})
