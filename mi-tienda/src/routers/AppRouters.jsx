import React from 'react'
import {
    HashRouter as Router,
    Switch,
} from 'react-router-dom'
import {LandingPage} from "../components/LandingPage"
import { ElegirPerfil } from '../components/ElegirPerfil'
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { PublicRouters } from './PublicRouters'
import { PrivateRouters } from './PrivateRouters'

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
                    path ="/navbar"
                    component ={Navbar}
                    isAuthenticated= {chequeador}
                    />
                    
                </Switch>
            </Router>   
            <Footer/>
        </div>
    )
}
