import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css'

function navbar(){
    return (<header className={classes.header}>
        <nav className="navbar" style={{ backgroundColor: '#FFFFFF' }}>
            <ul className={classes.list}>
            <h2>ConectaGym</h2>
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

export default navbar;