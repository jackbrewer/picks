import React from 'react'
import { shallow } from 'enzyme'
import StepProgress from '.'

describe('Component: StepProgress', function () {
  test('should output the expected markup with default props', function () {
    const wrapper = shallow(
      <StepProgress>
        <StepProgress.Item>Item one</StepProgress.Item>
        <StepProgress.Item>Item two</StepProgress.Item>
      </StepProgress>
    )
    expect(wrapper.prop('children').length).toEqual(2)
    expect(wrapper.childAt(0).dive().text()).toEqual('Item one')
    expect(wrapper.childAt(1).dive().text()).toEqual('Item two')
  })
})
