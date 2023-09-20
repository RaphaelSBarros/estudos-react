import { Link, useNavigate } from "react-router-dom"
import './PaginaInicial.css';

export default function PaginaInicial() {

    const navigate = useNavigate();

    return (
        <div className="fundoEscuro">
            <h1>Pagina Inicial</h1>
            <Link to="/contato">Contato</Link>
            <button onClick={() => navigate('/contato')}>Contato</button>
        </div>
    )
}

