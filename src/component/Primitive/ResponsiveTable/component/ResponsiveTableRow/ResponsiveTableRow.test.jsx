import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import ResponsiveTableRow from '.'

const requiredProps = () => ({ children: <td>Default content</td> })

describe('Component: ResponsiveTableRow', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ResponsiveTableRow.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(
      ResponsiveTableRow.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<ResponsiveTableRow {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('ResponsiveTableRow')
    expect(wrapper.prop('children')).toEqual(<td>Default content</td>)
  })

  test('should output additional className when `highlighted` prop passed', function() {
    const wrapper = shallow(
      <ResponsiveTableRow {...requiredProps()} highlighted />
    )
    expect(wrapper.prop('className')).toEqual('ResponsiveTableRow highlighted')
  })

  test('should output additional className when `separatorBelow` prop passed', function() {
    const wrapper = shallow(
      <ResponsiveTableRow {...requiredProps()} separatorBelow />
    )
    expect(wrapper.prop('className')).toEqual(
      'ResponsiveTableRow separatorBelow'
    )
  })
})
