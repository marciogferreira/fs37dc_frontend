import { useContext } from "react"
import { AutenticacaoContext } from "../../App"
import swal from 'sweetalert';
import Api from "../../config/Api";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
function LoginPage() {

    const { setLogado, setLoading } = useContext(AutenticacaoContext)
    async function handleLogin(values) {
      try {
        setLoading(true)
        const response = await Api.post('login', values)
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

    const validacaoForm = Yup.object().shape({
      email: Yup.string().required('Campo Obrigatório').email('E-mail Inválido.'),
      senha: Yup.string().required('Campo Obrigatório').min(6, 'Deve conter no mínimo 6 caracteres.')
    })

    return (
      <>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4 offset-md-4 mt-5">
             <div className="d-flex justify-content-center">
             <img 
                width={'200px'}
                src="https://static.vecteezy.com/system/resources/previews/002/064/364/original/hotel-and-resort-logo-template-building-logo-designs-travel-logo-vector.jpg" 
                alt="" 
              />
             </div>
              <Formik
                initialValues={{
                  email: '',
                  senha: ''
                }}
                validationSchema={validacaoForm}
                onSubmit={(values) => {
                  handleLogin(values)
                }}
              >
                {({ handleSubmit }) => (
                  <>
                    <div className="form-group mb-3">
                      <label>Email</label>
                      <Field 
                        type="email" 
                        name="email"
                        id="email" 
                        className="form-control" 
                        placeholder="E-mail" 
                      />
                     <div className="erro"> <ErrorMessage name="email" /></div>
                    </div>
                    
                    <div className="form-group mb-3">
                      <label>Senha</label>
                      <Field 
                        type="password" 
                        className="form-control" 
                        name="senha"
                        id="senha" 
                        placeholder="Senha" 
                      />
                      <div className="erro"> <ErrorMessage name="senha" /></div>
                     
                    </div>

                    <button onClick={handleSubmit}  className="btn btn-primary">
                      Acessar
                    </button>
                  </>
                )}
              </Formik>
              
            </div>
          </div>
        
        </div>
      </>
    )
  }
  
  export default LoginPage
  