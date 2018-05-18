import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/common/base.less';
import '../../styles/footer.less';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <footer className="footer flex-box-item">
        <ul className="footer-nav flex-box-group flex-box-group--horizontal">
          <li className="footer-nav-item flex-box-item">
            <NavLink exact to="/" className="footer-nav-button">home</NavLink>
          </li>
          <li className="footer-nav-item flex-box-item">
            <NavLink to="/cart" className="footer-nav-button">cart</NavLink >
          </li>
          <li className="footer-nav-item flex-box-item">
            <NavLink to="/upload" className="footer-nav-button">upload</NavLink>
          </li>
          <li className="footer-nav-item flex-box-item">
            <NavLink to="/bookmark" className="footer-nav-button">bookmark</NavLink>
          </li>
          <li className="footer-nav-item flex-box-item">
            <NavLink to="/mypage" className="footer-nav-button">mypage</NavLink>
          </li>
        </ul>
      </footer>
    )
  }
}

export default Footer;
