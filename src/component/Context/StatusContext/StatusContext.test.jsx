import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import { StatusContextProvider } from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: StatusContext', function () {
  validateRequiredProps(StatusContextProvider, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<StatusContextProvider {...requiredProps()} />)
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output status value when `status` prop passed', function () {
    const wrapper = shallow(
      <StatusContextProvider {...requiredProps()} status="success" />
    )
    expect(wrapper.prop('value')).toEqual('success')
  })
})
