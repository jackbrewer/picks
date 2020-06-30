import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { mount } from 'enzyme'
import VimeoEmbed, { VimeoEmbedFallbackUrl } from '.'

const requiredProps = () => ({ videoId: '123' })

describe('Component: VimeoEmbed', function () {
  validateRequiredProps(VimeoEmbed, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = mount(<VimeoEmbed {...requiredProps()} />)
    expect(wrapper.getDOMNode().src).toEqual(
      'https://player.vimeo.com/video/123?'
    )
  })

  test('should output additional querystring parameter if `hideByline` prop passed', function () {
    const wrapper = mount(<VimeoEmbed {...requiredProps()} hideByline />)
    expect(wrapper.getDOMNode().src).toEqual(
      'https://player.vimeo.com/video/123?byline=0'
    )
  })

  test('should output additional querystring parameter if `hideTitle` prop passed', function () {
    const wrapper = mount(<VimeoEmbed {...requiredProps()} hideTitle />)
    expect(wrapper.getDOMNode().src).toEqual(
      'https://player.vimeo.com/video/123?title=0'
    )
  })

  test('should output additional querystring parameter if `color` prop passed', function () {
    const wrapper = mount(<VimeoEmbed {...requiredProps()} color="123456" />)
    expect(wrapper.getDOMNode().src).toEqual(
      'https://player.vimeo.com/video/123?color=123456'
    )
    wrapper.setProps({ color: '#654321' })
    expect(wrapper.getDOMNode().src).toEqual(
      'https://player.vimeo.com/video/123?color=654321'
    )
  })

  test('should output additional fragment parameter `start` prop passed', function () {
    const wrapper = mount(<VimeoEmbed {...requiredProps()} start="20" />)
    expect(wrapper.getDOMNode().src).toEqual(
      'https://player.vimeo.com/video/123?#t=20s'
    )
  })

  test('should export a fallback URL', function () {
    expect(VimeoEmbedFallbackUrl('123')).toEqual('https://vimeo.com/123')
  })
})
