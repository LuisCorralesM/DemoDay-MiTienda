import React from 'react'
import {Link} from "react-router-dom"
export const LandingPage = () => {
    return (
        <div className="p-5">
        
        <Link to = "/perfil" className="text-decoration-none fs-1 d-grid justify-content-center"> 
            <p>Elegir Perfil </p>
            <img src="assets/img/click.png" alt="" style={{width: "100px"}} className="mx-3"/>
        </Link>
        <div className="m-5 text-center"> Espacio para  un slider </div>

        <div className="m-5 text-center"> Imagenes </div>
        </div>
    )
}
