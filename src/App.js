import React, { Component } from 'react';
import Home from "./Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path='/'component={Home} />
            <Route path='/:category' component={Home} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
