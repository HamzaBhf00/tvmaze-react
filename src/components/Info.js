import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Info = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then(response => response.json())
      .then(data => setShow(data))
      .catch(error => console.log(error));
  }, [showId]);

  if (!show) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="fas fa-spinner badge rounded-pill bg-warning text-dark">
          Cargando...
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="mt-4">Nombre de la serie: <span className="badge bg-success text-light">{show.name}</span></h1>
      <div className="row">
        <div className="col-md-4">
          <img src={show.image.medium} alt={show.name} />
        </div>
        <div className="col-md-8 mt-4">
          <h4>Resumen:</h4>
          <p>{show.summary}</p>
          <h4>Calificación:</h4>
          <p>{show.rating && show.rating.average}</p>
          <h4>Fecha de estreno:</h4>
          <p>{show.premiered}</p>
        </div>
      </div>
    </div>
  );

}

export default Info;
