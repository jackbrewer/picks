import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Swatch from '.'

const requiredProps = () => ({ color: '#123456' })

describe('Component: Swatch', function() {
  test('should return errors if required props missing', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Swatch.propTypes, {})
    const expected = {
      color:
        'The prop `color` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', function() {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Swatch.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup when supplied hex colour', function() {
    const { getAllByRole } = render(<Swatch {...requiredProps()} />)
    const items = getAllByRole('listitem')
    expect(items).toHaveLength(3)
    expect(items[0]).toHaveTextContent('rgb(18, 52, 86)')
    expect(items[1]).toHaveTextContent('hsl(210, 65.4%, 20.4%)')
    expect(items[2]).toHaveTextContent('#123456')
  })

  test('should output the expected markup when supplied rgb colour', function() {
    const { getAllByRole } = render(<Swatch color="rgb(18, 52, 86)" />)
    const items = getAllByRole('listitem')
    expect(items).toHaveLength(3)
    expect(items[0]).toHaveTextContent('rgb(18, 52, 86)')
    expect(items[1]).toHaveTextContent('hsl(210, 65.4%, 20.4%)')
    expect(items[2]).toHaveTextContent('#123456')
  })

  test('should output the expected markup when supplied hsl colour', function() {
    const { getAllByRole } = render(<Swatch color="hsl(210, 65.4%, 20.4%)" />)
    const items = getAllByRole('listitem')
    expect(items).toHaveLength(3)
    expect(items[0]).toHaveTextContent('rgb(18, 52, 86)')
    expect(items[1]).toHaveTextContent('hsl(210, 65.4%, 20.4%)')
    expect(items[2]).toHaveTextContent('#123456')
  })

  test('should output `name` prop', function() {
    const { getByText } = render(
      <Swatch {...requiredProps()} name="Example colour" />
    )
    expect(getByText('Example colour')).toBeTruthy()
  })

  test('should output expected markup with semi-transparent colours', function() {
    const { container, getAllByRole } = render(<Swatch color="#123456aa" />)
    const items = getAllByRole('listitem')
    expect(items).toHaveLength(2)
    expect(items[0]).toHaveTextContent('rgba(18, 52, 86, 0.67)')
    expect(items[1]).toHaveTextContent('hsla(210, 65.4%, 20.4%, 0.67)')
    expect(container.firstChild).toHaveClass('hasAlpha')
  })
})
