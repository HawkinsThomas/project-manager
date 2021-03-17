import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../../constants';


const NavBar = () => (
  <header className="px-3 py-1 text-dark bg-light">
    <nav className="row h-rem-5">
      <div className="logo w-10 text-large b-600">
        {APP_NAME}
      </div>
      <div className="col">
        <ul className="row nav h-100 align-v items-right">
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
            <Link to="/log-in">Login</Link>
          </li>
          <li className="h-100 px-1 mx-1">
            <Link to="/sign-up">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
