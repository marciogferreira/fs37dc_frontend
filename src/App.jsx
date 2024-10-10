import { BrowserRouter, Route, Routes } from "react-router-dom"
import PainelPage from "./pages/PainelPage"
import LoginPage from "./pages/LoginPage"
import NotFound from "./pages/NotFound"
import Menu from "./layout/Menu"
import TabelaUsuarios from "./pages/UsersPage/TabelaUsuarios"
import FormularioUsuarios from "./pages/UsersPage/FormularioUsuarios"

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<PainelPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/usuarios" element={<TabelaUsuarios />} />
          <Route path="/usuarios/novo" element={<FormularioUsuarios />} />
          <Route path="/usuarios/editar/:id" element={<FormularioUsuarios />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
