import { Link } from 'react-router-dom';

// utilizar 'Link' para carregar as páginas sem a necessidade de um novo pedido de HTTP

function PaginaInicial() {
    return (
    <>
    <h1>Página Incial</h1>
    <p>Go to <Link to="/Login">Login</Link>.</p>
    <p>Go to <Link to="/Cadastro">Cadastro</Link>.</p>
    </>
    );
}

export default PaginaInicial;
