import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css'

function navbar(){
    return (<header className={classes.header}>
        <nav>
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
            </ul>
        </nav>
    </header>
    );
}

export default navbar;