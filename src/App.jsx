import { createContext, useEffect, useState } from "react"
import RotasPrivadas from "./routes/RotasPrivadas"
import LoginPage from "./pages/LoginPage";

export const AutenticacaoContext = createContext();

function App() {
  const [logado, setLogado] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('tokenAppHotel')) {
      setLogado(true)
    }
  }, [])
  return (
    <>
    {loading && 
      <div className="loading">Carregando...</div>
    }
    <AutenticacaoContext.Provider value={{ logado, setLogado, loading, setLoading }}>
      {logado ? <RotasPrivadas /> : <LoginPage />}
    </AutenticacaoContext.Provider>
    </>
  )
}

export default App
