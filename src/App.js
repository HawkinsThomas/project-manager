import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Modules
import Footer from './modules/footer';
import NavBar from './modules/navBar';

// Pages
import About from './pages/about';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import Login from './pages/log-in';
import Signup from './pages/sign-up';


function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/log-in">
            <Login />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
