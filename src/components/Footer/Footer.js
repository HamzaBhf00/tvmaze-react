import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h4>Información de contacto</h4>
            <p>123 Calle Principal, Ciudad</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="col-md-6">
            <h4>Síguenos en las redes sociales</h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
