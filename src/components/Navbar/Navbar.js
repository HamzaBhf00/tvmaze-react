import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <button className="btn btn-outline-success me-2" type="button">Inicio</button>
              </Link>
              <Link to="shows">
                <button className="btn btn-outline-success me-2" type="button">Series</button>
              </Link>
              <Link to="personajes">
                <button className="btn btn-outline-success me-2" type="button">Personajes</button>
              </Link>
              <Link to="about">
                <button className="btn btn-outline-success me-2" type="button">Sobre Nosotros</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
};

export default Navbar;
