import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import ResponsiveImage from '.'

const requiredProps = () => ({
  alt: 'Default a11y text',
  src: '/image-800.jpg',
  width: 900,
  height: 450
})

describe('Component: ResponsiveImage', function () {
  test('should return errors if required props missing', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ResponsiveImage.propTypes, {})
    const expected = {
      height:
        'The prop `height` is marked as required in `Component`, but its value is `undefined`.',
      width:
        'The prop `width` is marked as required in `Component`, but its value is `undefined`.',
      src:
        'The prop `src` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function () {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(ResponsiveImage.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', function () {
    const { container, getByAltText } = render(
      <ResponsiveImage {...requiredProps()} />
    )
    expect(getByAltText('Default a11y text')).toBeTruthy()
    expect(container.firstChild).toHaveAttribute(
      'src',
      'https://img.clock.co.uk/900x450?color=d08d07'
    )
    expect(container.firstChild).toHaveAttribute('width', '900')
    expect(container.firstChild).toHaveAttribute('height', '450')
    expect(container.firstChild).not.toHaveAttribute('sizes')
    expect(container.firstChild).not.toHaveAttribute('srcSet')
  })

  test('should still output `alt` if empty string passed', function () {
    const { getByAltText } = render(
      <ResponsiveImage {...requiredProps()} alt="" />
    )
    expect(getByAltText('')).toBeTruthy()
  })

  test('should output attribute if `sizes` prop passed', function () {
    const { container } = render(
      <ResponsiveImage
        {...requiredProps()}
        sizes={['(min-width: 200px) 50vw', '100vw']}
      />
    )
    expect(container.firstChild).toHaveAttribute(
      'sizes',
      '(min-width: 200px) 50vw,100vw'
    )
  })

  test('should output attribute if `srcSet` prop passed', function () {
    const { container } = render(
      <ResponsiveImage
        {...requiredProps()}
        srcSet={[
          {
            width: 400,
            src: '/image-400.jpg'
          },
          {
            width: 800,
            src: '/image-800.jpg'
          }
        ]}
      />
    )
    expect(container.firstChild).toHaveAttribute(
      'srcSet',
      'https://img.clock.co.uk/400x200?color=6e5d88 400w, https://img.clock.co.uk/800x400?color=f45121 800w'
    )
  })
})
