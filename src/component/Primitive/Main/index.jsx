import React, { PureComponent } from 'react'
import { node } from 'prop-types'

import styles from './Main.module.scss'

class Main extends PureComponent {
  render() {
    const { children } = this.props

    return (
      <main id="content" role="main" className={styles.Main}>
        {children}
      </main>
    )
  }
}

Main.propTypes = {
  children: node.isRequired
}

export default Main
