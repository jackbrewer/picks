import React, { PureComponent } from 'react'
import { node, oneOf, string } from 'prop-types'
// import { Link } from 'react-router-dom'

class SmartLink extends PureComponent {
  render() {
    const { children, href, setRef, to, target, type, ...other } = this.props

    // Standard link, use an `anchor` element
    if (href) {
      return (
        <a
          href={href}
          ref={setRef}
          {...target && { target }}
          {...target === '_blank' && { rel: 'noopener noreferrer' }}
          {...other}
        >
          {children}
        </a>
      )
    }

    // Internal link, use third-party `Link` component from router module
    // if (to) {
    //   return (
    //     <Link to={to} ref={setRef} {...other}>
    //       {children}
    //     </Link>
    //   )
    // }

    // No `href` or `to` means we need a `button` element
    return (
      <button type={type} ref={setRef} {...other}>
        {children}
      </button>
    )
  }
}

SmartLink.defaultProps = {
  type: 'button'
}

SmartLink.propTypes = {
  children: node.isRequired,
  href: string,
  to: string,
  target: string,
  type: oneOf(['button', 'reset', 'submit'])
}

export default SmartLink
