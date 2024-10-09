import { BrowserRouter, Route, Routes } from "react-router-dom"
import PainelPage from "./pages/PainelPage"
import LoginPage from "./pages/LoginPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PainelPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
