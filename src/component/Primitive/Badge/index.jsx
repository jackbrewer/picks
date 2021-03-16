import React from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'
// import { StatusContext } from '@/component/Context/StatusContext'

import styles from './Badge.module.scss'

const Badge = ({ children }) => {
  // const contextStatus = useContext(StatusContext)
  // const derivedStatus = status || contextStatus

  return <div className={classNames(styles.Badge)}>{children}</div>
}

Badge.propTypes = {
  children: string.isRequired,
}

export default Badge
