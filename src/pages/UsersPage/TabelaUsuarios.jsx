import { useEffect, useState } from "react";

function TabelaUsuarios() {

    const [lista, setLista] = useState([])

    function consultarDados() {
        const resposta = fetch('https://jsonplaceholder.typicode.com/users')
        const respostaJson = resposta.then((dados) => {
           return dados.json();
        })
        respostaJson.then((json) => {
            console.log(json)
            setLista(json)
        })
    }

    useEffect(() => {
        consultarDados();
    }, []);
    
    return (
        <>
            <h1>Tabela de Usuários</h1>
            <button>Novo</button>
            <button onClick={consultarDados}>Listar Dados</button>
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
                                    <button>Editar</button>
                                    <button>Excluir</button>
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