import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import FieldAnswer from '.'

const requiredProps = () => ({
  children: 'Example text'
})

describe('Component: FieldAnswer', function () {
  validateRequiredProps(FieldAnswer, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<FieldAnswer {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('FieldAnswer')
  })
})
