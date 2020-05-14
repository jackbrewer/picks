import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import RatingItem from './'

const requiredProps = () => ({})

describe('Component: RatingItem', () => {
  test('should return errors if required props missing', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(RatingItem.propTypes, {})
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(RatingItem.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', () => {
    const { container } = render(<RatingItem {...requiredProps()} />)
    expect(container.querySelectorAll('polygon')).toHaveLength(1)
    expect(container.querySelector('polygon')).toHaveClass('isEmpty')
  })

  test('should output the expected markup with `full` prop', () => {
    const { container } = render(<RatingItem {...requiredProps()} full />)
    expect(container.querySelectorAll('polygon')).toHaveLength(1)
    expect(container.querySelector('polygon')).toHaveClass('isFull')
  })

  test('should output the expected markup with `clip` prop', () => {
    const { container } = render(<RatingItem {...requiredProps()} clip={0.5} />)
    const polygons = container.querySelectorAll('polygon')
    expect(polygons).toHaveLength(2)
    expect(polygons[0]).toHaveClass('isEmpty')
    expect(polygons[1]).toHaveClass('isFull')
    expect(polygons[1]).toHaveStyle({
      clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
    })
  })
})
