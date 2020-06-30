import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import FieldFeedback from '.'

const requiredProps = () => ({
  children: 'Example text'
})

describe('Component: FieldFeedback', function () {
  validateRequiredProps(FieldFeedback, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<FieldFeedback {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('FieldFeedback')
  })

  test('should output additional className when `status` prop passed', function () {
    const wrapper = shallow(
      <FieldFeedback {...requiredProps()} status="success" />
    )
    expect(wrapper.prop('className')).toEqual('FieldFeedback success')
  })
})
