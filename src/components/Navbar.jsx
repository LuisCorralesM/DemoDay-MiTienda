// Navbar 
import React from 'react'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/actionLogin'
import { useDispatch, useSelector } from 'react-redux'
import '../style/styleComponents/navbar.css'

export const Navbar = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(startLogout())
    }
    const { name } = useSelector(store => store.login)

    // Menu hamburguesa
    const cambiarClase = () => {
        let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
        let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');
    }

    // Animacion en cada cambio de página

    const dispararAnimacion = ()=>{
        const divAnimacion = document.getElementById('animacion')
        divAnimacion.classList.toggle('animacion-open')
        setTimeout(() => {
            divAnimacion.classList.toggle('animacion-close')
        }, 500);
        setTimeout(() => {
            divAnimacion.classList.toggle('animacion-close')
            divAnimacion.classList.toggle('animacion-open')
        }, 1000);
    }

    return (
        <div className="contedor-nav-bar">
            <div id="animacion" className="animacion"></div>
            <header>
                <div className="container">
                    <h1 className="logo"><Link to="/tienda" className="logo-mi-tienda"><span>Mi Tienda.com</span></Link></h1>
                </div>
                <nav id="site-nav" className="site-nav">
                    <ul>
                        <li>Bienvenido: <span className="title-bienvenido">👤 {name}</span></li>
                        <li><Link to="/landingpage/privado" onClick={()=>dispararAnimacion()}   >Nosotros</Link></li>
                        <li><Link to="/mapa" onClick={()=>dispararAnimacion()}>Elegir Tienda</Link></li>
                        <li><Link to="/carrito" onClick={()=>dispararAnimacion()}>Carrito</Link></li>
                        <li><Link to="/crudTendero" onClick={()=>dispararAnimacion()}>Admin</Link></li>
                        <li onClick={handleLogout} className="btn-salir" onClick={()=>dispararAnimacion()}>Salir</li>
                    </ul>
                </nav>
                <div id="menu-toggle" className="menu-toggle" onClick={() => cambiarClase()}>
                    <div className="hamburger"></div>
                </div>
            </header>

        </div>
    )
}
