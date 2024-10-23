import { useContext } from "react";
import { Link } from "react-router-dom";
import { AutenticacaoContext } from "../App";

function Menu() {

    const { setLogado } = useContext(AutenticacaoContext)
    
    function logout() {
        setLogado(false)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Fs37</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Painel</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/produtos">Produtos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/usuarios">Usuários</Link>
                        </li>
                        <li>
                            <a onClick={logout} className="nav-link" href="" >Sair</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu;