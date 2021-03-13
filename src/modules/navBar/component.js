import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../../constants';


const NavBar = () => (
  <header>
    <nav>
      <span>{APP_NAME}</span>
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
          <Link to="/log-in">Login</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign up</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
