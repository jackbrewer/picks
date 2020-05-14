import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import GridItem from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: GridItem', () => {
  test('should return errors if required props missing', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(GridItem.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(GridItem.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<GridItem {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional className when array of widths passed', () => {
    const { container } = render(
      <GridItem {...requiredProps()} width={[1 / 2]} />
    )
    expect(container.firstChild).toHaveClass('columns-50')
  })

  test('should not fail when array with too many widths passed', () => {
    const { container } = render(
      <GridItem {...requiredProps()} width={[1 / 2, 1 / 3]} />
    )
    expect(container.firstChild).toHaveClass('columns-50')
  })

  test('should output additional className when object of widths passed', () => {
    const { container } = render(
      <GridItem {...requiredProps()} width={{ columns: 1 / 2 }} />
    )
    expect(container.firstChild).toHaveClass('columns-50')
  })

  // test('should not fail when unrecognised width format passed', () => {
  //   const { container } = render(<GridItem {...requiredProps()} width={1} />)
  //   expect(container.firstChild).toHaveClass('GridItem')
  // })
})
