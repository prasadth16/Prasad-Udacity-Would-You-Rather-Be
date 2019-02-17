import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Authentication from '../util/auth'

const ProtectedRoute = ({ component: Component, ...rest }) => {

    return (
        <Route  {...rest}
            render={(props) => {
                if (Authentication.isAuthenticated()) {
                    return <Component {...props} />;
                }
                else {
                    return <Redirect to="/" />;
                }
            }} />
    )
}

export default ProtectedRoute 