import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './modules/footer';
import NavBar from './modules/navBar';
import Dashboard from './pages/dashboard';
import HomePage from './pages/home';


function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
