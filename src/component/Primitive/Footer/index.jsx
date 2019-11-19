import React from 'react'
// import { node } from 'prop-types'

import styles from './Footer.module.scss'

import Container from '../Container'
import TextAlign from '../TextAlign'
import Type from '../Type'

const Footer = props => {
  return (
    <footer className={styles.Footer}>
      <Container center gutter size="wide">
        <TextAlign center>
          <Type as="small" size="small">
            © Example Name
          </Type>
        </TextAlign>
      </Container>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
