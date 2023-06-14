import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer"

const Home = () => {
  return (
    <div>
      <section className="jumbotron text-center mt-5">
        <div className="container">
          <h1 className="jumbotron-heading">Bienvenidos</h1>
          <p className="lead text-muted">TVmaze es un servicio en línea que proporciona información detallada sobre programas de televisión, series y episodios. Es una base de datos exhaustiva que incluye una amplia gama de géneros y formatos de programas de televisión, desde series populares hasta programas de realidad, documentales y programas infantiles.</p>
          <p>
            <a href="https://www.tvmaze.com/api" className="btn btn-secondary my-2 ms-3">Pagina oficial de TvMaze</a>
            <a href="https://github.com/HamzaBhf00/tvmaze-react" className="btn btn-secondary my-2 ms-3">Repisotorio Github</a>

          </p>
        </div>
      </section>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src="https://static.tvmaze.com/uploads/images/medium_portrait/464/1161206.jpg" alt="Thumbnail" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to="shows">
                        <button href="/shows" type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
                      </Link>
                    </div>
                    <small className="text-muted">Lista de programas</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src="https://static.tvmaze.com/uploads/images/medium_portrait/3/8672.jpg" alt="Thumbnail" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to="personajes">
                        <button href="/shows" type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
                      </Link>
                    </div>
                    <small className="text-muted">Personajes</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src="https://static.tvmaze.com/uploads/images/medium_portrait/460/1150604.jpg" alt="Thumbnail [100%x225]" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to="about">
                        <button href="/shows" type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
                      </Link>
                    </div>
                    <small className="text-muted">sobre Nostros</small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
