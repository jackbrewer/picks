import React from 'react'
import { render } from '@testing-library/react'
import BackgroundImage from '.'

const requiredProps = () => ({ alt: 'Default a11y text' })

describe('Component: BackgroundImage', function () {
  test('should output the expected markup with default props', function () {
    const { container, getByRole, getByLabelText } = render(
      <BackgroundImage {...requiredProps()} src="/image.jpg" />
    )
    expect(getByRole('img')).toBeTruthy()
    expect(getByLabelText('Default a11y text')).toBeTruthy()
    expect(container.firstChild).toHaveStyle(
      'background-image: url(/image.jpg);'
    )
  })

  test('should output additional className when `fillContainer` prop passed', function () {
    const { container } = render(
      <BackgroundImage {...requiredProps()} src="/image.jpg" fillContainer />
    )
    expect(container.firstChild).toHaveClass('fillContainer')
  })

  test('should output additional styles when `color` prop passed', function () {
    const { container } = render(
      <BackgroundImage {...requiredProps()} src="/image.jpg" color="c0ffee" />
    )
    expect(container.firstChild).toHaveStyle({
      backgroundColor: 'c0ffee',
      backgroundImage: 'url(/image.jpg)',
    })
  })

  test('should output additional styles when `position` prop passed', function () {
    const { container } = render(
      <BackgroundImage {...requiredProps()} src="/image.jpg" position="0 0" />
    )
    expect(container.firstChild).toHaveStyle({
      backgroundImage: 'url(/image.jpg)',
      backgroundPosition: '0 0',
    })
  })

  test('should output additional styles when `ratio` prop passed', function () {
    const { container } = render(
      <BackgroundImage {...requiredProps()} src="/image.jpg" ratio={9 / 16} />
    )
    expect(container.firstChild).toHaveStyle({
      backgroundImage: 'url(/image.jpg)',
      paddingBottom: '56.25%',
    })
  })

  test('should output additional styles when `size` prop passed', function () {
    const { container } = render(
      <BackgroundImage {...requiredProps()} src="/image.jpg" size="cover" />
    )
    expect(container.firstChild).toHaveStyle({
      backgroundImage: 'url(/image.jpg)',
      backgroundSize: 'cover',
    })
  })

  test('should not output a11y attributes if alt=""', function () {
    const { queryByRole, queryByLabelText } = render(
      <BackgroundImage {...requiredProps()} alt="" />
    )
    expect(queryByRole('img')).toEqual(null)
    expect(queryByLabelText('Default a11y text')).toEqual(null)
  })

  test('should output formatted CSS in <style> if passed a srcSet', function () {
    const { container } = render(
      <BackgroundImage
        {...requiredProps()}
        srcSet={[
          { from: 0, src: '400.jpg' },
          { from: 400, src: '600.jpg' },
        ]}
      />
    )
    expect(container.querySelector('style')).toBeTruthy()
    expect(container.firstChild).toHaveStyle({
      backgroundImage: 'undefined',
    })
  })
})
