import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import DescriptionList from '.'

const requiredProps = () => ({
  items: { 'Term 1': 'Details 1', 'Term 2': 'Details 2' }
})

describe('Component: DescriptionList', function () {
  validateRequiredProps(DescriptionList, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<DescriptionList {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('DescriptionList')
    expect(wrapper.find('div')).toHaveLength(2)
    expect(wrapper.find('dt')).toHaveLength(2)
    expect(wrapper.find('dd')).toHaveLength(2)
  })
})
