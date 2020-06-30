import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import Element from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Element', function () {
  validateRequiredProps(Element, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<Element {...requiredProps()} />)
    expect(wrapper.type()).toEqual('div')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output as specified element if set', function () {
    const wrapper = shallow(<Element {...requiredProps()} as="h1" />)
    expect(wrapper.type()).toEqual('h1')
    expect(wrapper.text()).toEqual('Default content')
  })

  test('should output all additional props as expected', function () {
    const wrapper = shallow(
      <Element
        {...requiredProps()}
        className="example-class"
        title="Example title"
      />
    )
    expect(wrapper.prop('className')).toEqual('example-class')
    expect(wrapper.prop('title')).toEqual('Example title')
    expect(wrapper.text()).toEqual('Default content')
  })
})
