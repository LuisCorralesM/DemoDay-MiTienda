// Si va a iniciar sesion como persona o empresa
import React from "react"
import { Link } from "react-router-dom"
import '../style/styleComponents/perfiles.css'

export const ElegirPerfil = () => {
    return (
        <>
            <div className="contenedor-elegirPerfil">
                <h1 className="elegirPerfil__titulo">Mi Tienda  </h1>
                <div className="contenedor-opcion__perfiles">
                    <div className="persona">
                        <Link to="/auth/login" className="enlace-perfiles-perfil">
                            <img src="assets/img/persona.png" alt="icono persona" className="img-persona" />
                            <figcaption className="descripcion-img"> Comprador </figcaption>
                        </Link>
                    </div>
                    <div className="vendedor">
                        <Link to="/auth/login" className="enlace-perfiles-perfil">
                            <img src="assets/img/vendedor.png" alt="icono portafolio" className="img-vendedor" />
                            <figcaption className="descripcion-img"> Vendedor </figcaption>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

