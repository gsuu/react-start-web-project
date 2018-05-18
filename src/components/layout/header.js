import React, { Component } from 'react';
import '../../styles/common/base.less';
import '../../styles/header.less';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <header className="header flex-box-item">
        <button type="button" className="header-button btn-menu">menu</button>
        <h1 className="header-logo">
          Title
        </h1>
        <button type="button" className="header-button header-button--right btn-camera">camera</button>
      </header>
    )
  }
}

export default Header;
