import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import Description from '.'

const requiredProps = () => ({
  children: 'Example content',
  term: 'Example term'
})

describe('Component: Description', function () {
  validateRequiredProps(Description, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<Description {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('Description')
    expect(wrapper.find('dt').text()).toEqual('Example term')
    expect(wrapper.find('dd').text()).toEqual('Example content')
    expect(wrapper.find('Icon').length).toEqual(0)
  })

  test('should output the expected markup when `icon` prop passed', function () {
    const wrapper = shallow(
      <Description {...requiredProps()} icon="_placeholder" />
    )
    expect(wrapper.find('Icon').length).toEqual(1)
  })
})
