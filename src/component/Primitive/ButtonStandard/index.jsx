import React, { PureComponent } from 'react'
import { bool, string } from 'prop-types'
import classNames from 'classnames'

import styles from './ButtonStandard.module.scss'

import ButtonBase from '../ButtonBase'

export class ButtonStandard extends PureComponent {
  render() {
    const { secondary, theme, className, ...other } = this.props
    return (
      <ButtonBase
        className={classNames(
          styles.ButtonStandard,
          theme && styles[`ButtonStandard-${theme}`],
          secondary && styles.secondary,
          className
        )}
        {...other}
      />
    )
  }
}

ButtonStandard.displayName = 'ButtonStandard'

ButtonStandard.propTypes = {
  className: string,
  secondary: bool,
  theme: string
}

export default ButtonStandard
