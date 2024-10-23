import { BrowserRouter, Route, Routes } from "react-router-dom"
import PainelPage from "../pages/PainelPage"
import LoginPage from "../pages/LoginPage"
import NotFound from "../pages/NotFound"
import Menu from "../layout/Menu"
import TabelaUsuarios from "../pages/UsersPage/TabelaUsuarios"
import FormularioUsuarios from "../pages/UsersPage/FormularioUsuarios"

import ProductIndex from '../pages/ProductPage/ProductIndex'
import ProductForm from '../pages/ProductPage/ProductForm'

function RotasPrivadas() {
    return (
        <>
             <BrowserRouter>
                <Menu />
                <Routes>
                <Route path="/" element={<PainelPage />} />

                <Route path="/usuarios" element={<TabelaUsuarios />} />
                <Route path="/usuarios/novo" element={<FormularioUsuarios />} />
                <Route path="/usuarios/editar/:id" element={<FormularioUsuarios />} />

                <Route path="/produtos" element={<ProductIndex />} />
                <Route path="/produtos/novo" element={<ProductForm />} />
                <Route path="/produtos/editar/:id" element={<ProductForm />} />


                <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RotasPrivadas