import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import About from 'pages/about';
import Dashboard from 'pages/dashboard';
import Home from 'pages/home';
import Login from 'pages/log-in';
import Signup from 'pages/sign-up';
import Footer from 'modules/Footer';
import Navbar from 'modules/Navbar';

import store from 'store';



const Routes = (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
      <Footer />
    </Router>
  </Provider>
);

export default Routes;
