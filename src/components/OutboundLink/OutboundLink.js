import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
// import { AppBar as MaterialAppBar, Toolbar, Typography, Button, IconButton } from 'material-ui'

const styles = _theme => ({
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  centered: {
    textAlign: 'center',
  },
})

function OutboundLink({ classes, href, center, children, ...props }) {
  const renderLink = () => (
    <Typography
      color="accent"
      component="a"
      className={classes.link}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </Typography>
  )

  return center
    ? <div className={classes.centered}>{renderLink()}</div>
    : renderLink()
}

OutboundLink.propTypes = {
  classes: PropTypes.shape({
    link: PropTypes.string.isRequired,
    centered: PropTypes.string.isRequired,
  }).isRequired,
}

export const Internal = OutboundLink
export default withStyles(styles, true)(OutboundLink)
