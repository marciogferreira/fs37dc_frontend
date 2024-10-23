import { useNavigate } from "react-router-dom";

function ProductIndex() {

    const navigate = useNavigate();
    // https://dontpad.com/fs37
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
                    {/* Listar produtos aqui */}
                    <tr>
                        <td>1</td>
                        <td>Notebook</td>
                        <td>R$ 1200</td>
                        <td>5</td>
                        <td>
                            <button className="btn btn-info">Editar</button>
                            &nbsp;
                            <button className="btn btn-danger">Excluir</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default ProductIndex;