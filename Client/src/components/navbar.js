import { Link } from 'react-router-dom';

function navbar(){
    return <header>
        <nav>
            <ul>
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
}

export default navbar;