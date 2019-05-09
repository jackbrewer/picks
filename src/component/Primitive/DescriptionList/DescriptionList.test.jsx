import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import DescriptionList from '.'

const requiredProps = () => ({
  items: {
    Position: 'Prop',
    Age: 27,
    Height: '200cm',
    'Games Played': 41
  }
})

const classNameProp = 'red'

describe('Component: StatList', function() {
  test('should return errors if invalid default props passed', function() {
    const actual = validatePropTypes(DescriptionList.propTypes, {})
    const expected = {
      items:
        'The prop `items` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
    expect(Object.keys(actual)).toHaveLength(1)
  })

  test('shouldn’t error if valid default props passed', function() {
    const actual = validatePropTypes(DescriptionList.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<DescriptionList {...requiredProps()} />)
    expect(wrapper.prop('className')).toEqual('DescriptionList')
    expect(wrapper.find('DescriptionListItem')).toHaveLength(4)
  })

  test('check if class name has been added from prop', function() {
    const wrapper = shallow(<DescriptionList className={classNameProp} />)
    expect(wrapper.prop('className')).toEqual('DescriptionList red')
  })
})
