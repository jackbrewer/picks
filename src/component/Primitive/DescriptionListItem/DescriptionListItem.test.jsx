import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import DescriptionListItem from '.'

const requiredProps = () => ({
  itemKey: 'Example Key',
  itemValue: 'Example Value'
})

describe('Component: DescriptionListItem', function() {
  test('shouldn’t error if valid default props passed', function() {
    const actual = validatePropTypes(
      DescriptionListItem.propTypes,
      requiredProps()
    )
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<DescriptionListItem {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('DescriptionListItem')
    expect(wrapper.find('dt').prop('className')).toEqual(
      'DescriptionListItemKey'
    )
    expect(wrapper.find('dd').prop('className')).toEqual(
      'DescriptionListItemValue'
    )
    expect(wrapper.find('dt').text()).toEqual('Example Key')
    expect(wrapper.find('dd').text()).toEqual('Example Value')
  })

  test('should output nothing if no props are passed', function() {
    const wrapper = shallow(<DescriptionListItem />)
    expect(wrapper.type()).toEqual(null)
  })
})
