import React, { PureComponent } from 'react'
import { bool, string } from 'prop-types'
import classNames from 'classnames'

import styles from './ButtonStandard.module.scss'

import ButtonBase from '../ButtonBase'

class ButtonStandard extends PureComponent {
  render() {
    const { className, disabled, ...other } = this.props

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
}

ButtonStandard.propTypes = {
  className: string,
  disabled: bool
}

export default ButtonStandard
