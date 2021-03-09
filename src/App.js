import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './modules/navBar';
import HomePage from './pages/home';


function App() {
  return (
    <Router>
      <NavBar />
      <HomePage />
    </Router>
  );
}

export default App;
