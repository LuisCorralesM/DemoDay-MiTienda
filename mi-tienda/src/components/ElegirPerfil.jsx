// Si va a iniciar sesion como persona o empresa
import React from "react"

export const ElegirPerfil = () => {
    return (
        <>
            <main>
                <h1 className="titulo-elegir-perfil">Bienvenido a Mi Tienda.com </h1>
                <div className="perfil">
                    <div className="persona">
                        <img src="assets/img/persona.png" alt="icono persona" className="img-persona"/>
                        <figcaption className="descripcion-img">Persona</figcaption>
                    </div>
                    <div className="vendedor">
                        <img src="assets/img/vendedor.png" alt="icono portafolio" className="img-vendedor"/>
                        <figcaption className="descripcion-img">Vendedor</figcaption>
                    </div>
                </div>
            </main>
        </>
    )
}

