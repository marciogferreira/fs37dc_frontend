import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Painel</Link>
                </li>
                <li>
                    <Link to="/usuarios">Usuários</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </>
    )
}

export default Menu;