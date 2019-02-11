import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Logout extends Component {
    render() {
        return (
            <div>
                <Redirect to="/" />
            </div>
        )
    }

}
const LogoutControl = connect()(Logout)

export default LogoutControl