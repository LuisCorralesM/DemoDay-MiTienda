import React from 'react'
import {Link} from "react-router-dom"

export const Mapa = () => {
    return (
        <div className="p-5">
            <h1 className="fs-1 text-center"> Elija su tienda</h1>
            <div> 
                <h2 className="text-center py-5">Mapa</h2> 
            </div>
            <h1> 
                <Link to = "/tienda"> Tienda 1 </Link>
            </h1>
            
        </div>
    )
}
