// Navbar 
import React from 'react'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/actionLogin'
import { useDispatch } from 'react-redux'

export const Navbar = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg m-0 p-0">
                <div className="container-fluid" style={{backgroundColor: "#110C66"}}>
                    <Link className="navbar-brand" to="/">Mi Tienda.com</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor: "#1916A5"}}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/landingpage/privado"> Pagina Corporativa </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tienda"> Elegir una tienda  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/carrito"> Carrito  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/crudTendero"> CrudTendero  </Link>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={handleLogout}> Salir  </div>
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
