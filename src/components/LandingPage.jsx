import React from 'react'
import { Link } from "react-router-dom"
import '../style/styleComponents/bienvenida.css'
export const LandingPage = () => {
    return (
        <div className="p-3 contenedor-bienvenida">

            <div className="contenedor-bienvenida__enunciados">
                <h2 className="contenedor-bienvenida__titulo">Bienvenido a <br/><span> Mi Tienda.com</span> </h2>
                <p className=" Mi Tienda.com__slogan">Has las compras del hogar desde el sofá de tu casa, y usa el tiempo libre para descansar</p>
            </div>
            {/* carrusel */}
            <div id="carouselExampleIndicators" className="carousel slide slider-bienvenida" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="assets/img/1.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/img/2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="assets/img/3.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <Link to="/perfil" className="enlace-bienvenida-perfil">
                <h1  className="bienvenida-btn-continuar">Continuar</h1>
            </Link>
        </div>
    )
}
