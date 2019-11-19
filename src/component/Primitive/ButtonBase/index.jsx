import React from 'react'
import classNames from 'classnames'
import { bool, node, string } from 'prop-types'

import styles from './ButtonBase.module.scss'

import SmartLink from '../SmartLink'

const ButtonBase = props => {
  const { block, className, disabled, ...other } = props
  return (
    <SmartLink
      className={classNames(
        styles.ButtonBase,
        block && styles.block,
        disabled && styles.disabled,
        className
      )}
      disabled={disabled}
      {...other}
    />
  )
}

ButtonBase.propTypes = {
  block: bool,
  children: node.isRequired,
  className: string,
  disabled: bool
}

export default ButtonBase
