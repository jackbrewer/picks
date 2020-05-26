import React from 'react'
import { node, string } from 'prop-types'

import styles from './Promo.module.scss'

const Promo = ({ children, src }) => (
  <div className={styles.Promo} style={{ backgroundImage: `url(${src})` }}>
    <div className={styles.PromoContent}>{children}</div>
  </div>
)

Promo.propTypes = {
  children: node.isRequired,
  src: string
}

export default Promo
