import { useContext, useState } from "react"
import { AutenticacaoContext } from "../../App"
import swal from 'sweetalert';
import Api from "../../config/Api";
function LoginPage() {

    const { setLogado, setLoading } = useContext(AutenticacaoContext)
    const[login, setLogin] = useState('')
    const[password, setPassword] = useState('')

    async function handleLogin() {

      try {
        setLoading(true)
        const dados = {
          email: login, 
          senha: password
        }
        const response = await Api.post('login', dados)
        const data = response.data;
        swal("Sucesso!", data.message, "success");
        localStorage.setItem('tokenAppHotel', data.token)
        setLogado(true)
      } catch(e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    
    }

    return (
      <>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4 offset-md-4 mt-5">
              <form>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input value={login} onChange={e => setLogin(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input  value={password} onChange={e => setPassword(e.target.value)}  type="password" className="form-control" id="password" placeholder="Password" />
                </div>

                
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="button" onClick={handleLogin} className="btn btn-primary">Acessar</button>
              </form>
            </div>
          </div>
        
        </div>
      </>
    )
  }
  
  export default LoginPage
  