import React from 'react'
import { node } from 'prop-types'

import styles from './Main.module.scss'

const Main = props => {
  const { children } = props

  return (
    <main id="content" role="main" className={styles.Main}>
      {children}
    </main>
  )
}

Main.propTypes = {
  children: node.isRequired
}

export default Main
