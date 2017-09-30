import React from 'react'
import PropTypes from 'prop-types'
import ArticlePromotion from 'components/ArticlePromotion'
import AppBar from 'components/AppBar'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'


const Home = ({ classes }) => (
  <div>
    <AppBar />
    <main>

      <Grid container component="section" justify="center">
        <Grid item xs={6} md={6} lg={6}>
          <Paper className={classes.block} elevation={4}>
            <Typography type="headline" component="h1" align="center">
              Redux First Router Boilerplate
            </Typography>

            <div className={classes.imgContainer}>
              <img
                src="https://cdn.reactlandia.com/rudy-logo.png"
                alt="logo"
                style={{ height: 300 }}
              />
            </div>
            <Typography type="body1" component="p" align="center">
              RFR will become Rudy
            </Typography>

          </Paper>
        </Grid>
      </Grid>

      <Grid container component="section" justify="center">
        <Grid item xs={12} md={6}>
          <Paper className={classes.block} elevation={4}>
            <ArticlePromotion
              title="Wanna master SSR? Read:"
              text="Server-Render Like a Pro in 10 Steps /w Redux-First Router 🚀"
              url="https://medium.com/faceyspacey/server-render-like-a-pro-w-redux-first-router-in-10-steps-b27dd93859de"
            />
          </Paper>
        </Grid>
      </Grid>


      <Typography component="div" align="center">
        <Button
          className={classes.link}
          color="primary"
          href="https://twitter.com/nico__delfino"
          target="_blank"
          rel="noopener noreferrer"
          component="a"
        >
          *One of our first users, Nicolas Delfino, designed the logo, check him
          out: @nico__delfino
        </Button>
      </Typography>
      
    </main>
  </div>
)

const styles = theme => ({
  block: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,
  }),
  imgContainer: {
    textAlign: 'center',
  },
  link: {
    textTransform: 'none',
    margin: '0 auto',
  },
})


Home.propTypes = {
  classes: PropTypes.shape({
    block: PropTypes.string.isRequired,
    imgContainer: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  // page: PropTypes.string.isRequired,
}

export const Internal = Home
export default withStyles(styles)(Home)
