
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from '../../config/Api'
function FormularioUsuarios() {

    const params = useParams()
    const[nome, setNome] = useState('');
    const[login, setLogin] = useState('');
    const[email, setEmail] = useState('');

    function consultarPorId(id) {
        const resposta = Api.get('usuarios/'+id)
        const { data } = resposta;
        setNome(data.name)
        setLogin(data.username)
        setEmail(data.email)
    
    }

    async function salvarDados() {
        const dados = {
            nome: nome,
            login: login,
            email: email
        }
        try {
            await Api.post('usuarios', dados)
            alert("Usuario salvo com sucesso.")
            setNome('')
            setLogin('')
            setEmail('')
        } catch(e) {
            console.error(e);
        } finally {

        }
    }

    useEffect(() => {
        if(params.id) {
            consultarPorId(params.id)
        }
    }, [])

    return (
        <>
            <div className="container">
                <div className="col-md-6 offset-md-3">
                    Formulario - {params.id}
                    <form>
                        <div className="mb-3">
                            <label htmlFor="">Nome</label>
                            {nome}
                            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="form-control" name="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Login</label>
                            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} className="form-control" name="login" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">E-mail</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" name="email" />
                        </div>
                        <div className="mb-3">
                           <button type="button" onClick={salvarDados} className="btn btn-primary">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormularioUsuarios;