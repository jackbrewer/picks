import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import ResponsiveMedia from './'

describe('Component: ResponsiveMedia', function() {
  test('should return errors if invalid default props passed', function() {
    const actual = validatePropTypes(ResponsiveMedia.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
    expect(Object.keys(actual)).toHaveLength(1)
  })

  test('shouldn’t error if valid default props passed', function() {
    const actual = validatePropTypes(ResponsiveMedia.propTypes, {
      children: <img src="https://img.clock.co.uk/10" alt="" />
    })
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should not output anything but children by default', function() {
    const wrapper = shallow(
      <ResponsiveMedia>
        <img src="https://img.clock.co.uk/10" alt="" />
      </ResponsiveMedia>
    )
    expect(wrapper.html()).toEqual(
      '<img src="https://img.clock.co.uk/10" alt=""/>'
    )
  })

  test('should output the expected markup when passed a ratio prop', function() {
    const wrapper = shallow(
      <ResponsiveMedia ratio={9 / 16}>
        <img src="https://img.clock.co.uk/16x9" alt="" />
      </ResponsiveMedia>
    )
    expect(wrapper.prop('style').paddingBottom).toEqual('56.25%')
  })

  test('should handle a variety of ratio types', function() {
    const wrapper = shallow(
      <ResponsiveMedia ratio={1}>
        <img src="https://img.clock.co.uk/16x9" alt="" />
      </ResponsiveMedia>
    )
    expect(wrapper.prop('style').paddingBottom).toEqual('100%')
    wrapper.setProps({ ratio: 1 / 2 })
    expect(wrapper.prop('style').paddingBottom).toEqual('50%')
    wrapper.setProps({ ratio: 2 / 1 })
    expect(wrapper.prop('style').paddingBottom).toEqual('200%')
    wrapper.setProps({ ratio: 1 / 100 })
    expect(wrapper.prop('style').paddingBottom).toEqual('1%')
    wrapper.setProps({ ratio: 100 / 1 })
    expect(wrapper.prop('style').paddingBottom).toEqual('10000%')
  })

  test('should round ratio percentage to 4 decimal places', function() {
    const wrapper = shallow(
      <ResponsiveMedia ratio={321 / 111}>
        <img src="https://img.clock.co.uk/16x9" alt="" />
      </ResponsiveMedia>
    )
    expect(wrapper.prop('style').paddingBottom).toEqual('289.1892%')
  })
})
