import React, { useState, useEffect } from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import { AuthRouter } from './AuthRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter'
import Loading from '../components/Loading';
import { Carrito } from "../components/Carrito"
import { CrudTendero } from "../components/CrudTendero"
import Mapa from "../components/Mapa"


//Permite verificar si el usuario inicio sesion: https://firebase.google.com/docs/auth/web/manage-users?hl=es-419

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { loginSincrono } from '../actions/actionLogin';



const AppRouters = () => {

    const auth = getAuth()
    const dispatch = useDispatch()


    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(true)


    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            //se pone el ? para que no se explote la aplicacion si no encuentra un 

            if (user?.uid) {
                dispatch(loginSincrono(user.uid, user.displayName))
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
            setChecking(false)

        })

    }, [dispatch, setChecking])

    if (checking) {
        return (<Loading />)
    }

    return (
        <Router>

            <Switch>
                <PublicRouter
                    path="/auth"
                    component={AuthRouter}
                    isAuthenticated={isLoggedIn}
                />

                <PrivateRouter
                    exact
                    path="/"
                    component={Mapa}
                    isAuthenticated={isLoggedIn}
                />

                <PrivateRouter
                    exact
                    path="/carrito"
                    component={Carrito}
                    isAuthenticated={isLoggedIn}
                />
                <PrivateRouter
                    exact
                    path="/crudtendero"
                    component={CrudTendero}
                    isAuthenticated={isLoggedIn}
                />

                <Redirect to="/auth/login" />

            </Switch>
        </Router>
    )
}

export default AppRouters