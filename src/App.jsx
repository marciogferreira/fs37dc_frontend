import { BrowserRouter, Route, Routes } from "react-router-dom"
import PainelPage from "./pages/PainelPage"
import LoginPage from "./pages/LoginPage"
import NotFound from "./pages/NotFound"
import Menu from "./layout/Menu"
import TabelaUsuarios from "./pages/UsersPage/TabelaUsuarios"

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<PainelPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/usuarios" element={<TabelaUsuarios />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
