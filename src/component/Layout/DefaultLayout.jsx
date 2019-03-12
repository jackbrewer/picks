// import React from 'react'
import { node } from 'prop-types'

import '../../scss/base.scss'

const DefaultLayout = ({ children }) => children

DefaultLayout.propTypes = {
  children: node
}

export default DefaultLayout
