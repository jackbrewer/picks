import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BackgroundImage from '.'

const requiredProps = () => ({ alt: 'Default a11y text', src: '/image.jpg' })

describe('Component: BackgroundImage', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(BackgroundImage.propTypes, {})
    const expected = {
      alt:
        'The prop `alt` is marked as required in `Component`, but its value is `undefined`.',
      src:
        'The prop `src` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(BackgroundImage.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function() {
    const { container, getByRole, getByLabelText } = render(
      <BackgroundImage {...requiredProps()} />
    )
    expect(getByRole('img')).toBeTruthy()
    expect(getByLabelText('Default a11y text')).toBeTruthy()
    expect(container.firstChild).toHaveStyle(
      'background-image: url(/image.jpg);'
    )
  })

  test('should output additional className when `fillContainer` prop passed', function() {
    const { container } = render(
      <BackgroundImage {...requiredProps()} fillContainer />
    )
    expect(container.firstChild).toHaveClass('fillContainer')
  })

  test('should output additional styles when `color` prop passed', function() {
    const { container } = render(
      <BackgroundImage {...requiredProps()} color="c0ffee" />
    )
    expect(container.firstChild).toHaveStyle({
      backgroundColor: 'c0ffee',
      backgroundImage: 'url(/image.jpg)'
    })
  })

  test('should output additional styles when `position` prop passed', function() {
    const { container } = render(
      <BackgroundImage {...requiredProps()} position="0 0" />
    )
    expect(container.firstChild).toHaveStyle({
      backgroundImage: 'url(/image.jpg)',
      backgroundPosition: '0 0'
    })
  })

  test('should output additional styles when `ratio` prop passed', function() {
    const { container } = render(
      <BackgroundImage {...requiredProps()} ratio={9 / 16} />
    )
    expect(container.firstChild).toHaveStyle({
      backgroundImage: 'url(/image.jpg)',
      paddingBottom: '56.25%'
    })
  })

  test('should output additional styles when `size` prop passed', function() {
    const { container } = render(
      <BackgroundImage {...requiredProps()} size="cover" />
    )
    expect(container.firstChild).toHaveStyle({
      backgroundImage: 'url(/image.jpg)',
      backgroundSize: 'cover'
    })
  })

  test('should not output a11y attributes if alt=""', function() {
    const { queryByRole, queryByLabelText } = render(
      <BackgroundImage {...requiredProps()} alt="" />
    )
    expect(queryByRole('img')).toEqual(null)
    expect(queryByLabelText('Default a11y text')).toEqual(null)
  })
})
