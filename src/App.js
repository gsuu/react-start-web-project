import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, Footer } from './components';
import { Home, Cart, Upload, Bookmark, Mypage, NoMatch } from './pages';

import './styles/app.less';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <div className="flex-box-group flex-box-group--vertical">
          <Header />
          <div className="container flex-box-item flex-box-item--center">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
              <Route path="/upload" component={Upload} />
              <Route path="/bookmark" component={Bookmark} />
              <Route path="/mypage" component={Mypage} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
