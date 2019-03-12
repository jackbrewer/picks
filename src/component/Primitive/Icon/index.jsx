import React, { PureComponent } from 'react'
import { number, oneOf, string } from 'prop-types'
import classNames from 'classnames'

import svgDimensionsFormatter from '../../../lib/svg-dimensions-formatter'
import ratioScaler from '../../../lib/ratio-scaler'

import styles from './Icon.module.scss'

import Svgs from './Svgs'

class Icon extends PureComponent {
  render() {
    const { a11yText, className, type, height, width } = this.props
    const SvgType = Svgs[type]

    const targetDimensions = { width, height }
    const nativeDimensions = svgDimensionsFormatter(SvgType)
    const ratioDimensions = ratioScaler(
      targetDimensions,
      nativeDimensions,
      'ceil'
    )
    return (
      <span
        className={classNames(styles.Icon, className)}
        {...a11yText && {
          role: 'img',
          'aria-label': a11yText
        }}
        {...!a11yText && {
          'aria-hidden': 'true'
        }}
        style={{
          width: `${ratioDimensions.width}px`,
          height: `${ratioDimensions.height}px`
        }}
      >
        <SvgType />
      </span>
    )
  }
}

Icon.propTypes = {
  a11yText: string,
  className: string,
  type: oneOf(Object.keys(Svgs)).isRequired,
  height: number,
  width: number
}

export default Icon
