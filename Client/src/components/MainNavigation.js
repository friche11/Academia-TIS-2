import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function Navbar() {
  return (
    <header className={classes.header}>
      <nav className="nav">
        <h2>ConectaGym</h2>
        <ul className={classes.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>
          <li>
            <Link to="/fichas">Fichas</Link>
          </li>
          <li>
            <Link to="/aulas">Aulas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
