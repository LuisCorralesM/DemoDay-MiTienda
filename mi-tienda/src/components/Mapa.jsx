import React from 'react'
import {Link} from "react-router-dom"

export const Mapa = () => {
    return (
        <div>
            <h1> Elija su tienda</h1>
            <div> Mapa </div>
            <h1> 
                <Link to = "/tienda"> Tienda 1 </Link>
            </h1>
            
        </div>
    )
}
