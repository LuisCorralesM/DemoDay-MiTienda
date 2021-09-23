// Si va a iniciar sesion como persona o empresa
import React from "react"
import { Link } from "react-router-dom"

export const ElegirPerfil = () => {
    return (
        <>
            <main>
                <h1 className="titulo-elegir-perfil">Bienvenido a Mi Tienda.com </h1>
                <div className="perfil">
                    <div className="persona">
                        <img src="assets/img/persona.png" alt="icono persona" className="img-persona" />
                        <Link to="/login">
                            <figcaption className="descripcion-img">Persona</figcaption>
                        </Link>
                    </div>
                    <div className="vendedor">
                        <img src="assets/img/vendedor.png" alt="icono portafolio" className="img-vendedor" />
                        <Link to="/login">
                            <figcaption className="descripcion-img">Vendedor</figcaption>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

