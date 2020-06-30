// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { shallow } from 'enzyme'
import Progress from '.'

const requiredProps = () => ({})

describe('Component: Progress', function () {
  validateRequiredProps(Progress, requiredProps())
})
