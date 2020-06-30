import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { shallow } from 'enzyme'
import CaptionedMedia from '.'

const requiredProps = () => ({ children: <img src="" alt="" /> })

describe('Component: CaptionedMedia', function () {
  validateRequiredProps(CaptionedMedia, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = shallow(<CaptionedMedia {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('CaptionedMedia')
    expect(wrapper.find('img')).toHaveLength(1)
    expect(wrapper.find('div.CaptionedMediaBody')).toHaveLength(1)
    expect(wrapper.find('div.CaptionedMediaCaption')).toHaveLength(0)
  })

  test('should output additional content when `caption` prop passed', function () {
    const wrapper = shallow(
      <CaptionedMedia {...requiredProps()} caption="Example caption" />
    )
    expect(wrapper.text()).toEqual('Example caption')
    expect(wrapper.find('div.CaptionedMediaBody')).toHaveLength(1)
    expect(wrapper.find('div.CaptionedMediaCaption')).toHaveLength(1)
  })

  test('should output additional content when `caption` prop passed', function () {
    const wrapper = shallow(
      <CaptionedMedia {...requiredProps()} figure caption="Example caption" />
    )

    expect(wrapper.find('figure.CaptionedMediaBody')).toHaveLength(1)
    expect(wrapper.find('figcaption.CaptionedMediaCaption')).toHaveLength(1)
  })
})
