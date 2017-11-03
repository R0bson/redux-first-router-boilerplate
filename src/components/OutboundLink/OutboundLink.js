import React from 'react'
import PropTypes from 'prop-types'

function OutboundLink({ href, center, children, ...props }) {
  const renderLink = () => (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  )

  return center
    ? <div>{renderLink()}</div>
    : renderLink()
}

OutboundLink.propTypes = {
}

export const Internal = OutboundLink
export default OutboundLink
