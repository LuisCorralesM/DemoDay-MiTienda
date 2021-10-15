import React from 'react'
import { Link } from "react-router-dom"
import '../style/styleComponents/bienvenida.css'


export const LandingPage = () => {
    return (
        <>
            <div className="p-3 contenedor-bienvenida">
                <div className="contenedor-bienvenida__enunciados bienvenida">
                    <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1634302438/Capturaaaaa_eyanrt.png" alt="" />
                    <h1 className="contenedor-bienvenida__titulo">Bienvenido a  <span> Mi Tienda</span> </h1>

                    {/* <p className="mi-tienda__slogan">Has las compras del hogar desde el sofá de tu casa y usa el tiempo libre para descansar</p> */}
                </div>

                <div>

                </div>




                <div className="mision">
                    <img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1634302934/istockphoto-1223456247-170667a_iwj6k5.jpg" alt="" />

                    <p className="parrafo0">
                        <b> ¡¡ Has las compras del hogar desde el sofá de tu casa y usa el tiempo libre para descansar !!</b>
                    </p>
                </div>
                <Link to="/auth/perfil" className="enlace-bienvenida-perfil">
                    <h1 className="bienvenida-btn-continuar">Continuar</h1>
                </Link>




                <div>
                    <p className="parrafo1">
                        <h3>  <b>Mision de Mi Tienda </b> </h3>

                        Este proyecto nace con el objetivo de incentivar el comercio local, conectando al
                        comerciante de barrio dueño de un supermercado y/o tienda, con su vecino, logrando
                        que las personas puedan hacer el mercado desde la comodidad de su casa, por un medio
                        electrónico, seguro y fácil de usar, que además de ahorrar tiempo para ambas partes, al
                        conectar con el tendero más cercano, ayudamos a reducir la huella de carbono y el tiempo
                        de entrega
                    </p>
                    <p className="parrafo1">
                        <h3>  <b> ¿Como puedo hacer parte de la comunidad de Mi Tienda? </b> </h3>
                        En mi tienda puedes montar tu informacion de los productos y la ubicacion de tu tienda para que puedas ofrecerlos a las personas cercanas a tu comunidad.
                        Puedes comunicarte con el correo mitienda0123@gmail.com ; para que te suministre las credenciales necesarias para que puedas acceder a la zona de administracion en donde puedas gestionar los productos de tu tienda.

                    </p>
                </div>




            </div>
            <div className="contenedor-footer">
            </div>
        </>
    )
}
