import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand logo" to='/'>Salon Amob</Link>
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to='/services'>Services</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Equipe</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/hygiene" className="nav-link">Hygiène</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <button className="btn btn-outline-dark" type="submit">Prendre un rendez-vous</button>
                </form>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navbar