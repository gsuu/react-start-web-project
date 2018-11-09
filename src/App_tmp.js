import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import { Home, NoMatch, Create } from './pages'

class Nav extends Component {
  render() {
    return (
      <nav className="footer flex-box-item">
        <ul className="footer-nav flex-box-group flex-box-group--horizontal">
          <li className="footer-nav-item flex-box-item">
            <NavLink exact to="/" className="footer-nav-button">home</NavLink>
          </li>
          <li className="footer-nav-item flex-box-item">
            <NavLink exact to="/create" className="footer-nav-button">등록</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
            <Route component={NoMatch} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default App;
