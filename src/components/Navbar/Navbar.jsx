import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // const activeLink = ({ isActive }) => {
  //   return isActive ? { className: 'active' } : null;
  // };

  return (
    <nav className="navbar">
      <h1>MovieFlix</h1>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="movies">Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
