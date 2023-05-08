import Img from "../Assets/database.svg"
import { Link } from 'react-router-dom';
import "../Styles/PaginaInicial.css"

// utilizar 'Link' para carregar as páginas sem a necessidade de um novo pedido de HTTP

function PaginaInicial() {
    return (
    <>
    <body>
    <div className="body">
                <div className="left-cadastro">
                    <img src={Img} alt="Academia" className="chart" />
                </div>
                </div>
    </body>
    </>
    );
}

export default PaginaInicial;
