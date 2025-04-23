import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductForm() {
    const navigate = useNavigate();
    
    const { id } = useParams()
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [quantidade, setQuantidade] = useState('');

    async function salvarDados() {
        const dados = {
            nome: nome,
            valor: valor,
            quantidade: quantidade,
        }
        if(id) {
            // UPDATE 
            await axios.put('http://localhost:3000/produtos/'+id, dados)
            alert("Produto Atualizado com Sucesso")
            setNome('')
            setValor('')
            setQuantidade('')
        } else {
            await axios.post('http://localhost:3000/produtos', dados)
            alert("Produto Criado com Sucesso")
            setNome('')
            setValor('')
            setQuantidade('')
        }
        // navigate('/produtos');
    }

    async function getData() {
        const response = await axios.get('http://localhost:3000/produtos/'+id)
        setNome(response.data.nome)
        setValor(response.data.valor)
        setQuantidade(response.data.quantidade)
    }

    useEffect(() => {
        if(id) {
            getData();
        }
    }, [])

    return (
        <div className="container">
            <h3>Produtos - {id}</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="nome">Nome</label>
                    <input value={nome} onChange={e => setNome(e.target.value)} type="text" className="form-control" id="nome" placeholder="Nome do produto" />
                </div>
                <div className="mb-3">
                    <label htmlFor="valor">Valor</label>
                    <input value={valor} onChange={e => setValor(e.target.value)} type="number" step="0.01" className="form-control" id="valor" placeholder="Preço do produto" />
                </div>
                <div className="mb-3">
                    <label htmlFor="quantidade">Quantidade</label>
                    <input  value={quantidade}  onChange={e => setQuantidade(e.target.value)} type="number" className="form-control" id="quantidade" placeholder="Quantidade do produto" />
                </div>
            </form> 
            <button onClick={salvarDados} className="btn btn-primary">Salvar</button>
            &nbsp;
            <button onClick={() => navigate('/produtos')} className="btn btn-warning">Cancelar</button>
        </div>
    )
}

export default ProductForm;