// Navbar 
import React from 'react'
import { withRouter } from 'react-router-dom'
import { startLogout } from '../actions/actionLogin'
import { useDispatch, useSelector } from 'react-redux'
import '../style/styleComponents/navbar.css'

const Navbar = (props) => {
    const { history } = props;

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

    const dispararAnimacion = (e, direccion) => {
        e.preventDefault();
        const divAnimacion = document.getElementById('animacion')
        divAnimacion.classList.toggle('animacion-open')
        setTimeout(() => {
            divAnimacion.classList.toggle('animacion-close')
            if (direccion === '/tienda') {
                history.push('/tienda')
                }else if(direccion === '/landingpage/privado'){
                    history.push('/landingpage/privado')
                }else if(direccion === '/carrito'){
                    history.push('/carrito')
                }else if(direccion === '/crudTendero'){
                    history.push('/crudTendero')
                }else if(direccion === 'none'){
                    handleLogout()
                }
    
        }, 500);
        setTimeout(() => {
            divAnimacion.classList.toggle('animacion-close')
            divAnimacion.classList.toggle('animacion-open')
        }, 1000);

        if(direccion === '/mapa'){
            setTimeout(() => {
                history.push('/mapa')
            }, 900);
           
        }
    }

    return (
        <div className="contedor-nav-bar">
            <div id="animacion" className="animacion"></div>
            <header>
                <div className="container">
                    <h1 className="logo" onClick={(e) => dispararAnimacion(e, '/tienda')}><span className="logo-mi-tienda">Mi Tienda</span></h1>
                </div>
                <nav id="site-nav" className="site-nav">
                    <ul>
                        <li>Bienvenido: <span className="title-bienvenido">👤 {name}</span></li>
                        <li className="list-item-nav" onClick={(e) => dispararAnimacion(e, '/landingpage/privado')}>Nosotros</li>
                        <li className="list-item-nav" onClick={(e) => dispararAnimacion(e, '/mapa')}>Elegir Tienda</li>
                        <li className="list-item-nav" onClick={(e) => dispararAnimacion(e, '/carrito')}>Carrito</li>
                        <li className="list-item-nav" onClick={(e) => dispararAnimacion(e, '/crudTendero')}>Admin</li>
                        <li onClick={handleLogout} className="btn-salir" onClick={(e) => dispararAnimacion(e, 'none')}>Salir</li>
                    </ul>
                </nav>
                <div id="menu-toggle" className="menu-toggle" onClick={(e) => cambiarClase(e)}>
                    <div className="hamburger"></div>
                </div>
            </header>

        </div>
    )
}

export default withRouter(Navbar)
