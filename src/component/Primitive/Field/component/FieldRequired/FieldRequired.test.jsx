import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import FieldRequired from '.'

const requiredProps = () => ({})

describe('Component: FieldRequired', function () {
  validateRequiredProps(FieldRequired, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<FieldRequired />)
    expect(wrapper.prop('className')).toEqual('FieldRequired')
  })
})
