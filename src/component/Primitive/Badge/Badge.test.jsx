import React from 'react'
import { render } from '@testing-library/react'
import Badge from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Badge', () => {
  test('should output the expected markup with default props', () => {
    const { getByText } = render(<Badge {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })
})
