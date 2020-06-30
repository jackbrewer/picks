import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import FieldAssistance from '.'

const requiredProps = () => ({
  children: 'Example text'
})

describe('Component: FieldAssistance', function () {
  validateRequiredProps(FieldAssistance, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<FieldAssistance {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('FieldAssistance')
  })
})
