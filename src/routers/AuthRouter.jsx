import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Login} from '../components/Login';
import {RegistroYup} from '../components/RegistroYup';
import {LandingPage} from '../components/LandingPage';
import { ElegirPerfil } from '../components/ElegirPerfil';


export const AuthRouter = () => {
    return (

        //Arbol con todas las rutas publicas
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={Login }
                    />
                     <Route 
                        exact
                        path="/auth/perfil"
                        component={ElegirPerfil}
                    />

                    <Route 
                        exact
                        path="/auth/landingpage"
                        component={LandingPage }
                    />

                    <Route 
                        exact
                        path="/auth/registro"
                        component={ RegistroYup }
                    />

                    <Redirect to="/auth/landingpage" />

                </Switch>
            </div>

        </div>
    )
}