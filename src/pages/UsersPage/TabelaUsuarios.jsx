import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function TabelaUsuarios() {

    const [lista, setLista] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    async function consultarDados() {
        try {
            setLoading(true)
            const dados = await axios.get('https://jsonplaceholder.typicode.com/users');
            setLista(dados.data)
        } catch(e) {
            alert(e.message)
        } finally {
            setLoading(false)
            console.log("Finalizado")
        }
    }

    function editarDado(id) {
        navigate(`/usuarios/editar/${id}`)
    }

    async function deletarDado(id) {
        try {
            setLoading(true)
            await axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
            alert("Usuario deletado com sucesso.")
        } catch(e) {
            alert(e.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        consultarDados();
    }, []);
    return (
        <div className="container">
            <h3>Tabela de Usuários</h3>
            <button className="btn btn-success btn-sm">Novo</button>
            <button onClick={consultarDados} className="btn btn-primary btn-sm">Listar Dados</button>
            {loading ? 'Carregando...' : ''}
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>Email</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm" onClick={() => editarDado(item.id)}>Editar</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => deletarDado(item.id)}>Excluir</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaUsuarios;