import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from 'theme/globalStyles';
import Animations from 'theme/animations';
import { ThemeProvider } from 'styled-components';

import AppContainer from 'AppContainer';

// Modules
import Footer from 'modules/Footer';
import Navbar from 'modules/Navbar';

// Pages
import About from 'pages/about';
import Clients from 'pages/clients';
import Dashboard from 'pages/dashboard';
import Home from 'pages/home';
import Login from 'pages/log-in';
import Signup from 'pages/sign-up';
import Project from 'pages/project';

// Theme
import theme from 'theme/theme';

// Store
import store from './store';


const Routes = (
  <Provider store={store}>
    <Router>
      <AppContainer>
        <ThemeProvider theme={theme}>
          <Animations />
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/clients" component={Clients} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/project/:id" component={Project} />
          </Switch>
          <Footer />
        </ThemeProvider>
      </AppContainer>
    </Router>
  </Provider>
);

export default Routes;
