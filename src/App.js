import React, { Component } from 'react';
import { Header, Footer } from './components';
import './styles/app.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App;
