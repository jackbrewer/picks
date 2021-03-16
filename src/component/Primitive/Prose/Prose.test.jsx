import React from 'react'
import { render } from '@testing-library/react'
import Prose from '.'

const requiredProps = () => ({})

describe('Component: Prose', () => {
  test('should output the expected markup with default props', () => {
    const { getByText } = render(
      <Prose {...requiredProps()}>
        <p>Default content</p>
      </Prose>
    )
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output the expected markup with html', () => {
    const { getByText } = render(
      <Prose {...requiredProps()} dangerousHtml="<p>Default content</p>" />
    )
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional className when `inverse` prop passed', () => {
    const { container } = render(
      <Prose {...requiredProps()} inverse>
        <p>Default content</p>
      </Prose>
    )
    expect(container.firstChild).toHaveClass('inverse')
  })

  test('should output nothing if no children passed', () => {
    const { container } = render(<Prose {...requiredProps()} />)
    expect(container.firstChild).toBeNull()
  })
})
