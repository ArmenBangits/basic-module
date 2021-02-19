import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ExampleComponent from 'urbenn-chat'
import 'urbenn-chat/src/assets/style.scss'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <ExampleComponent />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
