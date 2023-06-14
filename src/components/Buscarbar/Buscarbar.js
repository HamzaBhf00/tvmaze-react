import React, { useState } from 'react';

const Buscarbar = ({ onSearch }) => {
    const [buscarTerm, setBuscarTerm] = useState('');

    const handleSearch = (event) => {
        setBuscarTerm(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <nav className="navbar navbar-light">
            <div className="container-fluid justify-content-center">
                <form className="d-flex" onSubmit={handleSearch}>
                    <input className="form-control me-2"
                        aria-label="Search"
                        type="text"
                        placeholder="Buscar serie..."
                        value={buscarTerm}
                        onChange={handleSearch}
                    />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    );
}

export default Buscarbar;
