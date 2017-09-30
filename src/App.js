import React from 'react'
import styles from 'css/App.css'
import Switcher from './pages/Switcher'

export default class App extends React.Component {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <Switcher />
      </div>
    )
  }
}
