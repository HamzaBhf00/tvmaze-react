import React, { useState } from 'react';

const Buscarbar = ({ onSearch }) => {
    const [buscarTerm, setBuscarTerm] = useState('');

    const handleSearch = (event) => {
        setBuscarTerm(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <nav class="navbar navbar-light">
            <div class="container-fluid justify-content-center">
                <form className="d-flex" onSubmit={handleSearch}>
                    <input class="form-control me-2"
                        aria-label="Search"
                        type="text"
                        placeholder="Buscar serie..."
                        value={buscarTerm}
                        onChange={handleSearch}
                    />
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    );
}

export default Buscarbar;
