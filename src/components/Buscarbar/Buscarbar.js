import { useState } from 'react'

const Buscarbar = () => {
    const [buscarTerm, setBuscarTerm] = useState("")
    const manejadorBusqueda = (e) => {
        e.pereventDefualt()

        console.log("Buscar por Term: " + buscarTerm)
    }

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Buscar"
                            value={buscarTerm}
                            onChange={(e) => setBuscarTerm(e.target.value)}
                        />
                        <button class="btn btn-outline-success" type="submit" onClick={manejadorBusqueda}>Buscar</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Buscarbar