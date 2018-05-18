import React, { Component } from 'react';
import Logo from './logo';
import '../../styles/header.less';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Logo />
      </header>
    )
  }
}

export default Header;
