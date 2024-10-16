import { createContext, useState } from "react"
import RotasPrivadas from "./routes/RotasPrivadas"
import LoginPage from "./pages/LoginPage";

export const AutenticacaoContext = createContext();

function App() {
  const [logado, setLogado] = useState(false)
  return (
    <AutenticacaoContext.Provider value={{ logado, setLogado }}>
      {logado ? <RotasPrivadas /> : <LoginPage />}
    </AutenticacaoContext.Provider>
  )
}

export default App
