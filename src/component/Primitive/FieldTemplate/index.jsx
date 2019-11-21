import React from 'react'
import { oneOf } from 'prop-types'

import CheckFieldTemplate from './CheckFieldTemplate'
import MultiTextFieldTemplate from './MultiTextFieldTemplate'
import TextFieldTemplate from './TextFieldTemplate'

const FieldTemplate = props => {
  const { template } = props
  const componentMap = {
    check: () => <CheckFieldTemplate {...props} />,
    multiText: () => <MultiTextFieldTemplate {...props} />,
    text: () => <TextFieldTemplate {...props} />
  }

  return componentMap[template]()
}

FieldTemplate.defaultProps = {
  template: 'text'
}

FieldTemplate.propTypes = {
  template: oneOf(['check', 'multiText', 'text'])
}

export default FieldTemplate
