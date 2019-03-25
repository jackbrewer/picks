import React, { PureComponent } from 'react'
import { bool } from 'prop-types'

import CustomSelectControl from './CustomSelectControl'
import NativeSelectControl from './NativeSelectControl'

class SelectControl extends PureComponent {
  render() {
    const { native, ...controlProps } = this.props
    const SelectControlType = native ? NativeSelectControl : CustomSelectControl

    return <SelectControlType {...controlProps} />
  }
}

SelectControl.propTypes = {
  native: bool
}

export default SelectControl
