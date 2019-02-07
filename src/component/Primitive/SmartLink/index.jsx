import React, { PureComponent } from 'react'
import { bool, node, oneOf, string } from 'prop-types'

// import { Link } from 'react-router-dom'

class SmartLink extends PureComponent {
  render() {
    const { children, disabled, href, to, target, type, ...other } = this.props

    if (href) {
      return (
        <a
          href={href}
          {...target && { target }}
          {...target === '_blank' && { rel: 'noopener noreferrer' }}
          {...other}
        >
          {children}
        </a>
      )
    }

    // if (to) {
    //   // Internal link, use react-router's Link component
    //   return (
    //     <Link to={to} {...other}>
    //       {children}
    //     </Link>
    //   )
    // }

    // No href or to means we need a button element
    return (
      <button type={type} disabled={disabled} {...other}>
        {children}
      </button>
    )
  }
}

SmartLink.displayName = 'SmartLink'

SmartLink.defaultProps = {
  type: 'button'
}

SmartLink.propTypes = {
  children: node.isRequired,
  disabled: bool,
  href: string,
  to: string,
  target: string,
  type: oneOf(['button', 'reset', 'submit'])
}

export default SmartLink
