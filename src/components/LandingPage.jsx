import React from 'react'
import { Link } from "react-router-dom"
import '../style/styleComponents/bienvenida.css'


export const LandingPage = () => {
    return (
        <>
            <div className="p-3 contenedor-bienvenida">
                <div className="contenedor-bienvenida__enunciados">
                    <h2 className="contenedor-bienvenida__titulo">Bienvenido a <br /><span> Mi Tienda</span> </h2>
                    <p className="mi-tienda__slogan">Has las compras del hogar desde el sofá de tu casa y usa el tiempo libre para descansar</p>
                </div>
                <div>
                    <p className="parrafo1">
                        Este proyecto nace con el objetivo de incentivar el comercio local, conectando al
                        comerciante de barrio dueño de un supermercado y/o tienda, con su vecino, logrando
                        que las personas puedan hacer el mercado desde la comodidad de su casa, por un medio
                        electrónico, seguro y fácil de usar, que además de ahorrar tiempo para ambas partes, al
                        conectar con el tendero más cercano, ayudamos a reducir la huella de carbono y el tiempo
                        de entrega
                    </p>
                </div>
                <Link to="/auth/perfil" className="enlace-bienvenida-perfil">
                    <h1 className="bienvenida-btn-continuar">Continuar</h1>
                </Link>

            </div>
            <div className="contenedor-footer">
            </div>
        </>
    )
}
