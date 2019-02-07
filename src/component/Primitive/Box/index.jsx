import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { any, number, object, oneOfType, string } from 'prop-types'
import styles from './Box.module.scss'

const unit = parseInt(styles.unit, 10) || 8

const formatValue = value => {
  if (typeof value === 'string') return value
  return value * unit
}

const formatValues = (property, values) => {
  const { xy, t, r, b, l } = values
  return {
    ...(xy && { [`${property}`]: formatValue(xy) }),
    ...(t && { [`${property}Top`]: formatValue(t) }),
    ...(r && { [`${property}Right`]: formatValue(r) }),
    ...(b && { [`${property}Bottom`]: formatValue(b) }),
    ...(l && { [`${property}Left`]: formatValue(l) }),
    ...(l && { [`${property}Left`]: formatValue(l) })
  }
}

class Box extends PureComponent {
  render() {
    const {
      children,
      is,
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,
      style
    } = this.props

    const BoxEl = is || 'div'
    const marginValues = {
      xy: m,
      t: mt || my,
      r: mr || mx,
      b: mb || my,
      l: ml || mx
    }
    const paddingValues = {
      xy: p,
      t: pt || py,
      r: pr || px,
      b: pb || py,
      l: pl || px
    }

    return (
      <BoxEl
        className={classNames(styles.Box)}
        style={{
          ...formatValues('margin', marginValues),
          ...formatValues('padding', paddingValues),
          ...style
        }}
      >
        {children}
      </BoxEl>
    )
  }
}

Box.displayName = 'Box'

Box.defaultProps = {}

Box.propTypes = {
  children: any.isRequired,
  is: string,
  m: oneOfType([number, string]),
  mx: oneOfType([number, string]),
  my: oneOfType([number, string]),
  mt: oneOfType([number, string]),
  mr: oneOfType([number, string]),
  mb: oneOfType([number, string]),
  ml: oneOfType([number, string]),
  p: oneOfType([number, string]),
  px: oneOfType([number, string]),
  py: oneOfType([number, string]),
  pt: oneOfType([number, string]),
  pr: oneOfType([number, string]),
  pb: oneOfType([number, string]),
  pl: oneOfType([number, string]),
  style: object
}

export default Box
