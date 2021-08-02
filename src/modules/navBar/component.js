import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from 'constants.js';
import { StyledComponent } from './styledComponent';


const Navbar = () => (
  <StyledComponent>
    <nav>
      <div className="logo">
        <span>
          {APP_NAME}
        </span>
        <div className="color-1" />
        <div className="color-2" />
        <div className="color-3" />
        <div className="color-4" />
        <div className="color-5" />
        <div className="color-6" />
      </div>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  </StyledComponent>
);

export default Navbar;
