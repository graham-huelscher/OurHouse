import React, { Component } from 'react';
import {
  Main
} from './screens'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route path={'/'} component={Main} exact={true} />
          </Switch>
        </Router>
      </div>
    )
  }

}

export default App;
