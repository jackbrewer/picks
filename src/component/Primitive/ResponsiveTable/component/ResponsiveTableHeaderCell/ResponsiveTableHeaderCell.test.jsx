import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import ResponsiveTableHeaderCell from '.'

import VisuallyHidden from '../../../VisuallyHidden'

const requiredProps = () => ({ title: 'Default title' })

describe('Component: ResponsiveTableHeaderCell', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ResponsiveTableHeaderCell.propTypes, {})
    const expected = {
      title:
        'The prop `title` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(
      ResponsiveTableHeaderCell.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<ResponsiveTableHeaderCell {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('ResponsiveTableHeaderCell')
    expect(wrapper.text()).toEqual('Default title')
  })

  test('should output additional className when `foo` prop passed', function() {
    const wrapper = shallow(
      <ResponsiveTableHeaderCell {...requiredProps()} hideUntil={200} />
    )
    expect(wrapper.prop('className')).toEqual(
      'ResponsiveTableHeaderCell hideUntil-200'
    )
  })

  test('should output title as accessible abbreviation if `abbr` prop set', function() {
    const wrapper = shallow(
      <ResponsiveTableHeaderCell {...requiredProps()} abbr="DT" />
    )
    expect(wrapper.childAt(0).type()).toEqual('abbr')
    expect(wrapper.childAt(0).text()).toEqual('DT')
    expect(wrapper.childAt(0).prop('title')).toEqual('Default title')
  })

  test('should output visually-hidden title if `hideTitle` prop set', function() {
    const wrapper = shallow(
      <ResponsiveTableHeaderCell {...requiredProps()} hideTitle />
    )
    expect(wrapper.childAt(0).type()).toEqual(VisuallyHidden)
    expect(
      wrapper
        .childAt(0)
        .dive()
        .text()
    ).toEqual('Default title')
  })

  test('should output visually-hidden title with `abbr` if `hideTitle` props set', function() {
    const wrapper = shallow(
      <ResponsiveTableHeaderCell {...requiredProps()} abbr="DT" hideTitle />
    )
    expect(wrapper.childAt(0).type()).toEqual(VisuallyHidden)
    expect(
      wrapper
        .childAt(0)
        .dive()
        .text()
    ).toEqual('Default title (DT)')
  })
})
