import { useContext } from "react"
import { AutenticacaoContext } from "../../App"


function LoginPage() {

    const { setLogado } = useContext(AutenticacaoContext)

    function login() {
      // BLOCO DE CODIGO VALIDACAO COM BANCO DE DADOS
      // VERIFICA SE LOGIN E SENHA ESTAO CORRETOS
      setLogado(true)
    }

    return (
      <>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4 offset-md-4 mt-5">
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="button" onClick={login} className="btn btn-primary">Acessar</button>
              </form>
            </div>
          </div>
        
        </div>
      </>
    )
  }
  
  export default LoginPage
  