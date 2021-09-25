import React from 'react'
import {
    HashRouter as Router,
    Switch,
} from 'react-router-dom'
import {LandingPage} from "../components/LandingPage"
import { ElegirPerfil } from '../components/ElegirPerfil'

import { Footer } from "../components/Footer"
import { PublicRouters } from './PublicRouters'
// import { PrivateRouters } from './PrivateRouters'
import { Login } from '../components/Login'
import { Registro } from '../components/Registro'
import Mapa from "../components/Mapa"
import Tienda from "../components/Tienda"
import {Carrito} from "../components/Carrito"
import PasarelaPago from "../components/PasarelaPago"

export const AppRouters = () => {

    const chequeador = false;
    
    return (
        <div>
            <Router>
                <Switch>
                    {/* Ruta Raiz */}
                    <PublicRouters
                    exact
                    path='/'
                    component={LandingPage}
                    isAuthenticated= {chequeador}
                    />
                    {/* Ruta Elegir perfil */}
                    <PublicRouters 
                    exact 
                    path = 
                    "/perfil"  
                    component={ElegirPerfil}
                    isAuthenticated= {chequeador}
                    />
                    {/* Mostrar Navbar en Ruta Privada */}
                    <PublicRouters
                    exact 
                    path ="/login"
                    component ={Login}
                    isAuthenticated= {chequeador}
                    />
                     <PublicRouters
                    exact 
                    path ="/registro"
                    component ={Registro}
                    isAuthenticated= {chequeador}
                    />
                    <PublicRouters
                    exact 
                    path ="/mapa"
                    component ={Mapa}
                    isAuthenticated= {chequeador}
                    />

                     <PublicRouters
                    exact 
                    path ="/tienda"
                    component ={Tienda}
                    isAuthenticated= {chequeador}
                    />

                    <PublicRouters
                    exact 
                    path ="/carrito"
                    component ={Carrito}
                    isAuthenticated= {chequeador}
                    />

                    <PublicRouters
                    exact 
                    path ="/pasarelaPago"
                    component ={PasarelaPago}
                    isAuthenticated= {chequeador}
                    />
                    
                </Switch>
            </Router>   
            <Footer/>
        </div>
    )
}
