import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function ProductIndex() {

    const navigate = useNavigate();
    const [lista, setLista] = useState([])
    
    async function getLista() {
        const resposta = await axios.get('http://localhost:3000/produtos')
        console.log(resposta.data)
        setLista(resposta.data)
    }

    async function deletarItem(id) {
        const confirma = confirm("Voce deseja deletar o produto?")
        if(confirma) {
            await axios.delete('http://localhost:3000/produtos/'+id)
            alert("Produto deletado")
            getLista()
        }
    }

    function editarItem(id) {
        navigate('/produtos/editar/'+id)
    }

    useEffect(() => {
        getLista();
    }, []);

    return (
        <div className="container">
            <h3>Produtos</h3>

            <div className="row">
                <div className="col-10">
                    <input type="search" className="form-control" placeholder="Pesquisar"/>
                </div>
                <div className="col">
                    <button onClick={() => navigate('/produtos/novo')} className="btn btn-success">Novo Produto</button>
                </div>
            </div>

            <table className="mt-5 table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Quantidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((produto, posicao) => (
                        <tr key={posicao}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.valor}</td>
                            <td>{produto.quantidade}</td>
                            <td>
                                <button id="btn_editar" onClick={() => editarItem(produto.id)} className="btn btn-info">Editar</button>
                                    &nbsp;
                                <button onClick={() => deletarItem(produto.id)} className="btn btn-danger">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductIndex;