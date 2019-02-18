import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import ResponsiveTableDataCell from '.'

const requiredProps = () => ({})

describe('Component: ResponsiveTableDataCell', function() {
  // test('should return errors if required props missing', function() {
  //   // eslint-disable-next-line react/forbid-foreign-prop-types
  //   const actual = validatePropTypes(ResponsiveTableDataCell.propTypes, {})
  //   const expected = {
  //     children:
  //       'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
  //   }
  //   expect(actual).toEqual(expected)
  // })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(
      ResponsiveTableDataCell.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<ResponsiveTableDataCell {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('ResponsiveTableDataCell')
    expect(wrapper.text()).toEqual('')
  })

  test('should output additional content when `children` prop passed', function() {
    const wrapper = shallow(
      <ResponsiveTableDataCell {...requiredProps()}>
        Default Content
      </ResponsiveTableDataCell>
    )
    expect(wrapper.text()).toEqual('Default Content')
  })

  test('should output additional className when `foo` prop passed', function() {
    const wrapper = shallow(
      <ResponsiveTableDataCell {...requiredProps()} hideUntil={200} />
    )
    expect(wrapper.prop('className')).toEqual(
      'ResponsiveTableDataCell hideUntil-200'
    )
  })
})
