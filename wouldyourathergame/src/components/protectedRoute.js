import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from '../util/auth'

const ProtectedRoute = ({ component: Component, ...rest }) => {

    return (
        <Route  {...rest}
            render={(props) => {
                console.log("user has logged in?", auth.isAuthenticated())
                if (auth.isAuthenticated()) {
                    return <Component {...props} />;
                }
                else {
                    return <Redirect to="/" />;
                }
            }} />
    )
}

export default ProtectedRoute 