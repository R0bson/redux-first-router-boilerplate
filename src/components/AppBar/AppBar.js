import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import MaterialAppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
// import { AppBar as MaterialAppBar, Toolbar, Typography, Button, IconButton } from 'material-ui'

const styles = _theme => ({
  root: {
    // marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

function AppBar(props) {
  const classes = props.classes
  return (
    <div className={classes.root}>
      <MaterialAppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Redux First Router Boilerplate
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </MaterialAppBar>
    </div>
  )
}

AppBar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    flex: PropTypes.string.isRequired,
    menuButton: PropTypes.string.isRequired,
  }).isRequired,
}

export const Internal = AppBar
export default withStyles(styles)(AppBar)
