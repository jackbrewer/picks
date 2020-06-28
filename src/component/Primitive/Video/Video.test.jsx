// import React from 'react'
import validatePropTypes from 'validate-prop-types'
// import { render } from '@testing-library/react'
import Video from '.'

const requiredProps = () => ({})

describe('Component: Video', () => {
  // test('should return errors if required props missing', () => {
  //   // eslint-disable-next-line react/forbid-foreign-prop-types
  //   const actual = validatePropTypes(Video.propTypes, {})
  //   const expected = {}
  //   expect(actual).toEqual(expected)
  // })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(Video.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  // test('should output the expected markup with default props', () => {
  //   const { getByRole } = render(<Video {...requiredProps()} />)
  //   expect(getByRole('video')).toBeTruthy()
  // })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<Video {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})
