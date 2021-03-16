import React from 'react'
import { number, oneOf, string } from 'prop-types'
import classNames from 'classnames'

import svgDimensionsFormatter from '../../../lib/svg-dimensions-formatter'
import ratioScaler from '../../../lib/ratio-scaler'

import styles from './Icon.module.scss'

const svgs = require.context('../../../asset/svg/icon/', false, /\.svg$/)

// Exported to allow iteration in storybook
export const vAligns = ['baseline', 'bottom', 'middle', 'top']
export const types = svgs
  .keys()
  .map((key) => key.replace(`./`, '').replace(`.svg`, ''))

/**
 * A wrapping element containing an inline SVG. Displays at the SVGs native
 * size by default, but a custom width/height can be passed.
 *
 * An a11yText prop is required, similar to how an image requires an alt
 * attribute. If the icon is purely decorative, or is described by text
 * directly next to it, then a blank string can be passed as a11yText to
 * hide the icon from assistive technology.
 */

const Icon = ({ a11yText, type, height, width, vAlign }) => {
  const SvgType = svgs(`./${type}.svg`).default

  const targetDimensions = { width, height }
  const nativeDimensions = svgDimensionsFormatter(SvgType)
  const ratioDimensions = ratioScaler({
    target: targetDimensions,
    native: nativeDimensions,
  })

  return (
    <span
      className={classNames(styles.Icon, vAlign && styles[vAlign])}
      {...(a11yText && {
        role: 'img',
        'aria-label': a11yText,
      })}
      {...(!a11yText && {
        'aria-hidden': 'true',
      })}
      style={{
        width: `${ratioDimensions.width}px`,
        height: `${ratioDimensions.height}px`,
        lineHeight: `${ratioDimensions.height}px`,
      }}
    >
      <SvgType />
    </span>
  )
}

Icon.propTypes = {
  a11yText: string.isRequired,
  type: oneOf(types).isRequired,
  height: number,
  width: number,
  vAlign: oneOf(vAligns),
}

export default Icon
