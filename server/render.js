import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { Provider } from 'react-redux'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
// Material-UI SSR
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import preset from 'jss-preset-default'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import createGenerateClassName from 'material-ui/styles/createGenerateClassName'
import { indigo, cyan } from 'material-ui/colors'
// end Material-UI SSR
import configureStore from './configureStore'
import App from '../src/App'

export default ({ clientStats }) => async (req, res, _next) => {
  const store = await configureStore(req, res)
  if (!store) return null // no store means redirect was already served

  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry()


  // a try to fix material-ui grid SSR issue - seems it doesn't work
  global.navigator = {
    userAgent: req.headers['user-agent'],
  }

  // Create a theme instance.
  const theme = createMuiTheme({
    palette: {
      primary: indigo,
      accent: cyan,
      type: 'light',
    },
  })

  // Configure JSS
  const jss = create(preset())
  jss.options.createGenerateClassName = createGenerateClassName

  // render component
  const app = createApp(App, store, sheetsRegistry, jss, theme)
  const _appString = ReactDOM.renderToString(app)

  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString()

  const stateJson = JSON.stringify(store.getState())
  const chunkNames = flushChunkNames()
  const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames })

  /* eslint-disable no-console */
  console.log('REQUESTED PATH:', req.path)
  console.log('CHUNK NAMES RENDERED', chunkNames)
  /* eslint-disable no-console */

  // temporary disabled SSR
  // ${appString}
  return res.send(
    `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>redux-first-router-boilerplate</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" integrity="sha256-HxaKz5E/eBbvhGMNwhWRPrAR9i/lG1JeT4mD6hCQ7s4=" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
          ${styles}
        </head>
        <body>
          <script>window.REDUX_STATE = ${stateJson}</script>
          <div id="root"></div>
          <style id="jss-server-side">${css}</style>
          ${cssHash}
          ${js}
        </body>
      </html>`
  )
}

const createApp = (App, store, sheetsRegistry, jss, theme) => (
  <Provider store={store}>
    <JssProvider registry={sheetsRegistry} jss={jss}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <App />
      </MuiThemeProvider>
    </JssProvider>
  </Provider>
)
