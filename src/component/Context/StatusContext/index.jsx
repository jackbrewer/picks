import React from 'react'
import { node, oneOf } from 'prop-types'

const StatusContext = React.createContext()

const StatusContextProvider = props => {
  const { children, status } = props
  return (
    <StatusContext.Provider value={status}>{children}</StatusContext.Provider>
  )
}

StatusContextProvider.propTypes = {
  children: node.isRequired,
  status: oneOf(['error', 'notice', 'success', 'warning'])
}

const StatusContextConsumer = StatusContext.Consumer

export { StatusContext, StatusContextProvider, StatusContextConsumer }
