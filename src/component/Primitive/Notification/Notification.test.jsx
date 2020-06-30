import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import Notification from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Notification', function () {
  validateRequiredProps(Notification, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<Notification {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Notification')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output the expected markup when `onDismiss` prop passed', function () {
    const wrapper = shallow(
      <Notification {...requiredProps()} onDismiss={() => {}} />
    )
    expect(wrapper.find('IconButton').length).toEqual(1)
  })

  test('should output additional className when `status` prop passed', function () {
    const wrapper = shallow(
      <Notification {...requiredProps()} status="success" />
    )
    expect(wrapper.prop('className')).toEqual('Notification success')
  })
})
