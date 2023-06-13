import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <div class="container-fluid ">
        <div class="collapse navbar-collapse justify-content-center">
          <ul class="navbar-nav">
            <li class="nav-item">

              <Link to="/">
              <button class="btn btn-outline-success me-2" type="button">Home</button>
              </Link>
              <Link to="about">
              <button class="btn btn-outline-success me-2" type="button">About</button>
              </Link>

            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar