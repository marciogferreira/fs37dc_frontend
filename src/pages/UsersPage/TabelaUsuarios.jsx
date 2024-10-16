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
        <>
            <h1>Tabela de Usuários</h1>
            <button>Novo</button>
            <button onClick={consultarDados}>Listar Dados</button>
            {loading ? 'Carregando...' : ''}
            <table border='1'>
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
                                    <button onClick={() => editarDado(item.id)}>Editar</button>
                                    <button onClick={() => deletarDado(item.id)}>Excluir</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default TabelaUsuarios;