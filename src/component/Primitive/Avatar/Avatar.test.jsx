import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Avatar from '.'

const requiredProps = () => ({ name: 'Firstname Lastname' })

describe('Component: Avatar', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Avatar.propTypes, {})
    const expected = {
      name:
        'The prop `name` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Avatar.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const { getByTitle, queryByLabelText } = render(
      <Avatar {...requiredProps()} />
    )
    expect(getByTitle('Firstname Lastname')).toBeTruthy()
    expect(queryByLabelText('Initials')).toBeNull()
  })

  test('should output the expected markup when `initials` prop passed with one character', function() {
    const { container, getByText } = render(
      <Avatar {...requiredProps()} initials="A" />
    )
    expect(getByText('A')).toBeTruthy()
    expect(container.firstChild).toHaveStyle('font-size: 22px;')
  })

  test('should output the expected markup when `initials` prop passed with two characters', function() {
    const { container, getByText } = render(
      <Avatar {...requiredProps()} initials="AB" />
    )
    expect(getByText('AB')).toBeTruthy()
    expect(container.firstChild).toHaveStyle('font-size: 22px;')
  })

  test('should output the expected markup when `initials` prop passed with three characters', function() {
    const { container, getByText } = render(
      <Avatar {...requiredProps()} initials="ABC" />
    )
    expect(getByText('ABC')).toBeTruthy()
    expect(container.firstChild).toHaveStyle('font-size: 15px;')
  })

  test('should output the expected markup when `initials` prop passed with three characters', function() {
    const { container, getByText } = render(
      <Avatar {...requiredProps()} initials="ABCD" />
    )
    expect(getByText('ABCD')).toBeTruthy()
    expect(container.firstChild).toHaveStyle('font-size: 11px;')
  })

  test('should output the expected markup when `initials` prop passed with three characters', function() {
    const { container, getByText } = render(
      <Avatar {...requiredProps()} initials="ABC" />
    )
    expect(getByText('ABC')).toBeTruthy()
    expect(container.firstChild).toHaveStyle('font-size: 15px;')
  })

  test('should output the expected markup when `src` prop passed', function() {
    const { container } = render(
      <Avatar {...requiredProps()} src="/image.jpg" />
    )
    expect(container.firstChild).toHaveStyle(
      'background-image: url(/image.jpg);'
    )
  })

  test('should output the expected markup when `size` prop passed', function() {
    const { container } = render(<Avatar {...requiredProps()} size={96} />)
    expect(container.firstChild).toHaveStyle('width: 96px;')
    expect(container.firstChild).toHaveStyle('height: 96px;')
    expect(container.firstChild).toHaveStyle('line-height: 96px;')
  })

  test('should output the expected markup when `borderRadius` prop passed', function() {
    const { container } = render(
      <Avatar {...requiredProps()} borderRadius={10} />
    )
    expect(container.firstChild).toHaveStyle('border-radius: 10px;')
  })

  test('should output additional styles when `backgroundColor` prop passed', function() {
    const { container } = render(
      <Avatar {...requiredProps()} backgroundColor="#ff0" />
    )
    expect(container.firstChild).toHaveStyle('background-color: #ff0;')
  })

  test('should output additional styles when `color` prop passed', function() {
    const { container } = render(<Avatar {...requiredProps()} color="#333" />)
    expect(container.firstChild).toHaveStyle('color: #333;')
  })
})
