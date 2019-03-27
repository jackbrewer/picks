import React from 'react'
import { shallow } from 'enzyme'
import Field from '.'

describe('Component: Field', function() {
  test.skip('should output the expected markup with default props', function() {
    const wrapper = shallow(
      <Field>
        <Field.Item>Item one</Field.Item>
        <Field.Item>Item two</Field.Item>
      </Field>
    )
    expect(wrapper.prop('children').length).toEqual(2)
    expect(
      wrapper
        .childAt(0)
        .dive()
        .text()
    ).toEqual('Item one')
    expect(
      wrapper
        .childAt(1)
        .dive()
        .text()
    ).toEqual('Item two')
  })
})
