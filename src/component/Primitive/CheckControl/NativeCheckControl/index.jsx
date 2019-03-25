import React from 'react'
import { bool, func, number, oneOf, string } from 'prop-types'

const NativeCheckControl = props => {
  const {
    checked,
    className,
    disabled,
    id,
    name,
    onChange,
    required,
    type,
    tabIndex,
    value
  } = props

  return (
    <input
      checked={checked}
      className={className}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      required={required}
      tabIndex={tabIndex}
      type={type}
      value={value}
    />
  )
}

NativeCheckControl.propTypes = {
  checked: bool,
  className: string,
  disabled: bool,
  id: string,
  name: string.isRequired,
  onChange: func,
  required: bool,
  tabIndex: number,
  type: oneOf(['checkbox', 'radio']).isRequired,
  value: string.isRequired
}

export default NativeCheckControl
