import React, { PureComponent } from 'react'
import { node, string } from 'prop-types'

class Element extends PureComponent {
  render() {
    const { is, ...other } = this.props
    const ElementEl = is

    return <ElementEl {...other} />
  }
}

Element.defaultProps = {
  is: 'div'
}

Element.propTypes = {
  children: node.isRequired,
  is: string
}

export default Element
