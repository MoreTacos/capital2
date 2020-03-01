import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <Link className="logo" to="/">
        <Logo />
      </Link>
    </div>
    <div className="target">
      <Link className="link" to="/games">
        Games
      </Link>
      <Link className="link" to="/signin">
        Sign In
      </Link>
      <Link className="link" to="/profile">
        Profile
      </Link>
    </div>
  </div>
);

export default Header;
