// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import Calendar from '.'

const requiredProps = () => ({})

describe('Component: Calendar', () => {
  validateRequiredProps(Calendar, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText, queryAllByRole } = render(
  //     <Calendar {...requiredProps()} />
  //   )
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
