import React, { PureComponent } from 'react'
import { oneOf } from 'prop-types'

import CheckFieldTemplate from './CheckFieldTemplate'
import MultiTextFieldTemplate from './MultiTextFieldTemplate'
import TextFieldTemplate from './TextFieldTemplate'

class FieldTemplate extends PureComponent {
  render() {
    const { template } = this.props
    const componentMap = {
      check: () => <CheckFieldTemplate {...this.props} />,
      multiText: () => <MultiTextFieldTemplate {...this.props} />,
      text: () => <TextFieldTemplate {...this.props} />
    }

    return componentMap[template]()
  }
}

FieldTemplate.defaultProps = {
  template: 'text'
}

FieldTemplate.propTypes = {
  template: oneOf(['check', 'multiText', 'text'])
}

export default FieldTemplate
