import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from 'constants.js';


const Navbar = () => (
  <header className="px-3 py-1 text-dark bg-light">
    <nav className="row h-rem-5">
      <div className="row col-md-6 items-left align-center text-large b-600">
        <span>
          {APP_NAME}
        </span>
      </div>
      <div className="col-md-6">
        <ul className="row nav h-100 align-center items-right color-medium">
          <li className="h-100 px-1 mx-1">
            <Link to="/">Home</Link>
          </li>
          <li className="h-100 px-1 mx-1">
            <Link to="/about">About</Link>
          </li>
          <li className="h-100 px-1 mx-1">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="h-100 px-1 mx-1">
            <Link to="/login">Login</Link>
          </li>
          <li className="h-100 px-1 mx-1">
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
