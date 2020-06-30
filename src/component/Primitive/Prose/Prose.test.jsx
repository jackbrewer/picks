import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import Prose from '.'

const requiredProps = () => ({})

describe('Component: Prose', function () {
  validateRequiredProps(Prose, requiredProps())

  test('should output the expected markup with children', function () {
    const wrapper = shallow(
      <Prose>
        <p>Default content</p>
      </Prose>
    )
    expect(wrapper.find('p').text()).toEqual('Default content')
  })

  test('should output the expected markup with html', function () {
    const wrapper = shallow(<Prose dangerousHtml="<p>Default content</p>" />)
    expect(wrapper.html()).toEqual(
      '<div class="Prose"><p>Default content</p></div>'
    )
  })

  test('should output nothing without children or html', function () {
    const wrapper = shallow(<Prose />)
    expect(wrapper.type()).toEqual(null)
  })

  test('should output additional className when `inverse` prop passed', function () {
    const wrapper = shallow(
      <Prose inverse>
        <a href="#example">Default content</a>
      </Prose>
    )
    expect(wrapper.prop('className')).toEqual('Prose inverse')
  })
})
