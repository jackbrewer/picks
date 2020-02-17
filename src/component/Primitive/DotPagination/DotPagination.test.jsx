import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { shallow } from 'enzyme'
import DotPagination from '.'

const requiredProps = () => ({ dots: 3, onChangeIndex: () => {} })

describe('Component: DotPagination', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(DotPagination.propTypes, {})
    const expected = {
      dots:
        'The prop `dots` is marked as required in `Component`, but its value is `undefined`.',
      onChangeIndex:
        'The prop `onChangeIndex` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(DotPagination.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const wrapper = shallow(<DotPagination {...requiredProps()} />)
    const buttons = wrapper.find('button')
    expect(wrapper.prop('className')).toEqual('DotPagination')
    expect(wrapper.find('li').length).toEqual(3)
    expect(
      buttons
        .at(0)
        .find('VisuallyHidden')
        .dive()
        .text()
    ).toEqual('Go to slide 1')
    expect(buttons.at(0).prop('className')).toEqual(
      'DotPaginationButton active'
    )
    expect(buttons.at(1).prop('className')).toEqual('DotPaginationButton')
    expect(buttons.at(2).prop('className')).toEqual('DotPaginationButton')
  })

  test('should output the expected markup if `activeIndex` prop passed', function() {
    const wrapper = shallow(
      <DotPagination {...requiredProps()} activeIndex={2} />
    )
    const buttons = wrapper.find('button')
    expect(buttons.at(0).prop('className')).toEqual('DotPaginationButton')
    expect(buttons.at(1).prop('className')).toEqual('DotPaginationButton')
    expect(buttons.at(2).prop('className')).toEqual(
      'DotPaginationButton active'
    )
  })

  test('should output the custom text when `a11yPrefix` prop passed', function() {
    const wrapper = shallow(
      <DotPagination {...requiredProps()} a11yPrefix="View photo" />
    )
    expect(
      wrapper
        .find('li')
        .at(0)
        .find('VisuallyHidden')
        .dive()
        .text()
    ).toEqual('View photo 1')
  })

  test('should trigger `onChangeIndex` function on button click', function() {
    const mockOnClick = jest.fn()
    const wrapper = shallow(
      <DotPagination {...requiredProps()} onChangeIndex={mockOnClick} />
    )
    expect(mockOnClick.mock.calls.length).toBe(0)
    wrapper
      .find('button')
      .at(0)
      .simulate('click')
    expect(mockOnClick.mock.calls.length).toBe(1)
  })
})
