import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import FieldWrapper from '.'

const requiredProps = () => ({
  children: <p>Default content</p>
})

describe('Component: FieldWrapper', function () {
  validateRequiredProps(FieldWrapper, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<FieldWrapper {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('FieldWrapper')
  })

  test('should output additional props as attributes', function () {
    const wrapper = shallow(
      <FieldWrapper {...requiredProps()} id="exampleId" />
    )
    expect(wrapper.prop('id')).toEqual('exampleId')
  })

  test('should output additional styles when `className` prop passed', function () {
    const wrapper = shallow(
      <FieldWrapper {...requiredProps()} className="example" />
    )
    expect(wrapper.prop('className')).toEqual('FieldWrapper example')
  })

  test('should output additional styles when `status` prop passed', function () {
    const wrapper = shallow(
      <FieldWrapper {...requiredProps()} status="error" />
    )
    expect(wrapper.prop('className')).toEqual('FieldWrapper error')
  })
})
