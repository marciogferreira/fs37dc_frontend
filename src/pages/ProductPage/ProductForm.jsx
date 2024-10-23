import { useNavigate } from "react-router-dom";

function ProductForm() {

    const navigate = useNavigate();

    return (
        <div className="container">
            <h3>Produtos</h3>
            <form action="">
                
            </form>

            <button onClick={() => navigate('/produtos')} className="btn btn-warning">Cancelar</button>
        </div>
    )
}

export default ProductForm;