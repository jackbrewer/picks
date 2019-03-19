import React, { PureComponent } from 'react'
import { node, string } from 'prop-types'

class Element extends PureComponent {
  render() {
    const { as, ...other } = this.props
    const ElementEl = as

    return <ElementEl {...other} />
  }
}

Element.defaultProps = {
  as: 'div'
}

Element.propTypes = {
  children: node.isRequired,
  as: string
}

export default Element
