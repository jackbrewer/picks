import React, { PureComponent } from 'react'
import { bool, node, string } from 'prop-types'
import classNames from 'classnames'

import styles from './ButtonBase.module.scss'

import SmartLink from '../SmartLink'

export class ButtonBase extends PureComponent {
  render() {
    const { block, className, disabled, theme, ...other } = this.props
    return (
      <SmartLink
        className={classNames(
          styles.ButtonBase,
          theme && styles[`ButtonBase-${theme}`],
          block && styles.block,
          disabled && styles.disabled,
          className
        )}
        disabled={disabled}
        {...other}
      />
    )
  }
}

ButtonBase.displayName = 'ButtonBase'

ButtonBase.propTypes = {
  block: bool,
  children: node.isRequired,
  className: string,
  disabled: bool,
  theme: string
}

export default ButtonBase
