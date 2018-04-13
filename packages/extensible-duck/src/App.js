import React from 'react'
import 'babel-polyfill'
import { Provider } from 'react-redux'
import store from './store'
import Main from './containers/Main'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default App
