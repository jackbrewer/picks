import React from 'react'
import validatePropTypes from 'validate-prop-types'
import { render } from '@testing-library/react'
import Blockquote from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Blockquote', () => {
  test('should return errors if required props missing', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Blockquote.propTypes, {})
    const expected = {
      children:
        'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
    }
    expect(actual).toEqual(expected)
  })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Blockquote.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<Blockquote {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional content when `citation` prop passed', () => {
    const { getByText } = render(
      <Blockquote {...requiredProps()} citation="Firstname Lastname" />
    )
    expect(getByText('Default content')).toBeTruthy()
    expect(getByText('Firstname Lastname')).toBeTruthy()
  })

  test('should output additional styles when `quoteMarks` prop passed', () => {
    const { container } = render(<Blockquote {...requiredProps()} quoteMarks />)
    expect(container.firstChild).toHaveClass('quoteMarks')
  })
})
