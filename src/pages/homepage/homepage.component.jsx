import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <div className="menu-item">
      <div className="background" />
      <Link className="game1" to="/game1">
        Game1
      </Link>
    </div>
  </div>
);

export default HomePage;
