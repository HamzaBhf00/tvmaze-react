import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Buscarbar from "../Buscarbar/Buscarbar";

const Shows = () => {
  const [shows, setShows] = useState([]);
  const [filtrarShows, setFiltrarShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => {
        setShows(data);
        setFiltrarShows(data);
      })
      .catch(error => console.log(error));
  }, []);

  const busquedaMayus = (searchTerm) => {
    const filtrar = shows.filter(show => show.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFiltrarShows(filtrar);
  };

  return (
    <div className="container ">
      <h1 className="mt-4 text-center">Lista de programas de TV</h1>
      <Buscarbar onSearch={busquedaMayus} />
      <div className="row">
        {filtrarShows.map(show => (
          <div key={show.id} className="col-md-4 mt-4">
            <div className="card">
              <Link to={`/info/${show.id}`}>
                <img src={show.image.medium} alt={show.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{show.name}</h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shows;
