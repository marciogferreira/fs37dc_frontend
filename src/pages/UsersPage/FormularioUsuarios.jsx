import { useParams } from "react-router-dom";

function FormularioUsuarios() {

    const params = useParams()
    console.log(params)

    return (
        <>
            Formulario - {params.id}
        </>
    )
}

export default FormularioUsuarios;