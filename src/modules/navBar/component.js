import { Link } from 'react-router-dom';
import { APP_NAME } from '../../constants';

const NavBar = () => {
  return ( 
    <header>
      <nav>
        <span>{APP_NAME}</span>
        <ul>
          <li>
            <Link to="/">Link 1</Link>
          </li>
          <li>
            <Link to="/dashboard">Link 2</Link>
          </li>
        </ul>
      </nav>
    </header>
   );
}
 
export default NavBar;