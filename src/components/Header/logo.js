import React, { Component } from 'react';
import logoImage from '../../images/logo.svg';

class Logo extends Component {
  render() {
    return (
      <Logo className="logo">
        <logoImage className="logo-image" />
      </Logo>
    )
  }
}

export default Logo;
