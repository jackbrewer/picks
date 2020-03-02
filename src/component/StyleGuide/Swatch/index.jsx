import React from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'
import colorConverter from 'css-color-converter'

import styles from './Swatch.module.scss'

const getColorInfo = color => {
  const formattedColor = colorConverter(color)
  return {
    alpha: formattedColor.toRgbaArray()[3],
    formats: [
      color.includes('rgb') ? color : formattedColor.toRgbString(),
      color.includes('hsl') ? color : formattedColor.toHslString(),
      color.includes('#') ? color : formattedColor.toHexString()
    ]
  }
}

const Swatch = ({ color, name }) => {
  const { alpha, formats } = getColorInfo(color)
  return (
    <div className={classNames(styles.Swatch, alpha < 1 && styles.hasAlpha)}>
      <div
        className={styles.SwatchInner}
        style={{ backgroundColor: color || formats[0] }}
      >
        <div className={styles.SwatchContent}>
          <div className={styles.SwatchHeading}>{name}</div>
          <ul className={styles.SwatchList}>
            {formats.length === 0 && color}
            {formats.length > 0 &&
              formats.map(format => (
                <li key={`Swatch-${format}`} className={styles.SwatchListItem}>
                  {format}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

Swatch.propTypes = {
  color: string.isRequired,
  name: string
}

export default Swatch
