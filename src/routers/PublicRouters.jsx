import React from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'

export const PublicRouters = ({
    isAuthenticated,
    component: Component,
    ...rest

}) => {
    return (
        <Route {...rest}
            component={(props)=>(
                (isAuthenticated)?(<Redirect to="/"/>):(<Component {...props}/>)
            )}
        />
    )
}

PublicRouters.propTypes = {
isAuthenticated: PropTypes.bool.isRequired,
component: PropTypes.func.isRequired
}
