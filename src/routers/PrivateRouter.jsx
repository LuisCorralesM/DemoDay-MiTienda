import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Navbar from "../components/Navbar"
import {Footer} from "../components/Footer"

export const PrivateRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <>
        <Navbar/> 
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/auth/landingpage"/> )
            )}
        />
        <Footer/>
        </>
    )
}

// PropTypes: ligado a los props que llegan, es un requerimiento.
PrivateRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}