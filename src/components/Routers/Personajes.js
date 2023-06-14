import React, { useState, useEffect } from 'react';
import {getPeople} from "../Service/personajes"

const Personajes = () => {
  const [characters, setCharacters] = useState(null)

  useEffect(() => {
    //fetch('https://api.tvmaze.com/people')
    // .then(response => response.json())
    // .then(data => setCharacters(data))
    // .catch(error => console.log(error));
    getPeople().then(data => setCharacters(data))
      .catch(error => console.log(error));
  }, []);

  if (!characters) {
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
      <h1 className="mt-4">Índice de Personajes</h1>
      <div className="row">
        {characters.map(character => (
          <div key={character.id} className="col-md-4 mt-4">
            <div className="card">
              <img src={character.image?.medium} alt={character.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.birthday}</p>
                <p className="card-text">{character.country?.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personajes;
