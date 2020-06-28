// import React from 'react'
import validatePropTypes from 'validate-prop-types'
// import { render } from '@testing-library/react'
import VideoLooper from '.'

const requiredProps = () => ({})

describe('Component: VideoLooper', () => {
  // test('should return errors if required props missing', () => {
  //   // eslint-disable-next-line react/forbid-foreign-prop-types
  //   const actual = validatePropTypes(VideoLooper.propTypes, {})
  //   const expected = {
  //     children:
  //       'The prop `children` is marked as required in `Component`, but its value is `undefined`.'
  //   }
  //   expect(actual).toEqual(expected)
  // })

  test('shouldn’t error if valid default props passed', () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const actual = validatePropTypes(VideoLooper.propTypes, requiredProps())
    const expected = undefined
    expect(actual).toEqual(expected)
  })

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<VideoLooper {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<VideoLooper {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})
