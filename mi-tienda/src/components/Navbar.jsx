// Navbar 
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Mi Tienda</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/tienda"> Home </Link>  
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/"> Pagina Corporativa </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/mapa"> Elegir una tienda  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/carrito"> Carrito  </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar producto..." aria-label="Search" />
                            <button className="btn btn-outLinkne-success" type="submit"> Buscar </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
