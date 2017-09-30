import 'raf'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/createPalette'
import { indigo, cyan } from 'material-ui/colors'
import AppContainer from 'react-hot-loader/lib/AppContainer'
import App from './App'
import configureStore from './configureStore'

const history = createHistory()
const { store } = configureStore(history, window.REDUX_STATE)


// Create a theme instance.
const theme = createMuiTheme({
  palette: createPalette({
    primary: indigo,
    accent: cyan,
    type: 'light',
  }),
})

const render = App => {
  const root = document.getElementById('root')

  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Provider>
    </AppContainer>,
    root
  )
}

render(App)

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./App', () => {
    const App = require('./App').default // eslint-disable-line global-require
    render(App)
  })
}
