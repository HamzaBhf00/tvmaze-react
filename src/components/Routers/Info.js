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
    return <div>Cargando...</div>;
  }

  return (
    <div className="container">
      <h1 className="mt-4">{show.name}</h1>
      <div>
        <img src={show.image.medium} alt={show.name} />
        <p>{show.summary}</p>
      </div>
    </div>
  );
}

export default Info;
