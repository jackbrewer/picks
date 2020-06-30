import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { mount } from 'enzyme'
import YouTubeEmbed, { YouTubeEmbedFallbackUrl } from '.'

const requiredProps = () => ({ videoId: '123' })

describe('Component: YouTubeEmbed', function () {
  validateRequiredProps(YouTubeEmbed, requiredProps())

  test('should output the expected markup with default props', function () {
    const wrapper = mount(<YouTubeEmbed {...requiredProps()} />)
    expect(wrapper.getDOMNode().src).toEqual(
      'https://www.youtube.com/embed/123?modestbranding=1&playsinline=1&rel=0'
    )
  })

  test('should output additional querystring parameter if `hideControls` prop passed', function () {
    const wrapper = mount(<YouTubeEmbed {...requiredProps()} hideControls />)
    expect(wrapper.getDOMNode().src).toEqual(
      'https://www.youtube.com/embed/123?modestbranding=1&playsinline=1&rel=0&controls=0'
    )
  })

  test('should output additional querystring parameter if `start` prop passed', function () {
    const wrapper = mount(<YouTubeEmbed {...requiredProps()} start="20" />)
    expect(wrapper.getDOMNode().src).toEqual(
      'https://www.youtube.com/embed/123?modestbranding=1&playsinline=1&rel=0&start=20'
    )
  })

  test('should export a fallback URL', function () {
    expect(YouTubeEmbedFallbackUrl('123')).toEqual(
      'https://www.youtube.com/watch?v=123'
    )
  })
})
