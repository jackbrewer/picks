import React from 'react'
import { bool, string } from 'prop-types'
import classNames from 'classnames'

import styles from './ButtonStandard.module.scss'

import ButtonBase from '../ButtonBase'

const ButtonStandard = props => {
  const { className, disabled, ...other } = props

  return (
    <ButtonBase
      className={classNames(
        styles.ButtonStandard,
        disabled && styles.disabled,
        className
      )}
      disabled={disabled}
      {...other}
    />
  )
}

ButtonStandard.propTypes = {
  className: string,
  disabled: bool
}

export default ButtonStandard
