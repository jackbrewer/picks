import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import GridWrapper from '.'
import Grid from '../..'

const requiredProps = () => ({
  children: <Grid.Item>Default content</Grid.Item>
})

describe('Component: GridWrapper', () => {
  test('should return errors if required props missing', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(GridWrapper.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(GridWrapper.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<GridWrapper {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional className when `gutter` prop passed', () => {
    const { container } = render(
      <GridWrapper {...requiredProps()} gutter="default" />
    )
    expect(container.firstChild).toHaveClass('gutter-default')
  })

  test('should output additional className when `reverse` prop passed as bool', () => {
    const { container } = render(<GridWrapper {...requiredProps()} reverse />)
    expect(container.firstChild).toHaveClass('reverse')
  })

  test('should output additional className when `reverse` prop passed as string', () => {
    const { container } = render(
      <GridWrapper {...requiredProps()} reverse="d" />
    )
    expect(container.firstChild).toHaveClass('reverse-d')
  })
})
