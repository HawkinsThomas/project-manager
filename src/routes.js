import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import About from 'pages/about';
import Dashboard from 'pages/dashboard';
import Home from 'pages/home';
import Login from 'pages/log-in';
import Signup from 'pages/sign-up';
import Footer from 'modules/footer';
import NavBar from 'modules/navBar';

import store from './store';



const Routes = (
  <Provider store={store}>
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/log-in" component={Login} />
          <Route path="/sign-up" component={Signup} />
        </Switch>
      </main>
      <Footer />
    </Router>
  </Provider>
);

export default Routes;
