import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'
import Authentication from '../util/auth'
class SignOff extends Component {
    componentDidMount() {
        Authentication.logout()
        this.props.dispatch(logout())
    }
    render() {
        return (
            <div> You have been logged off... Please login again to continue!!!!</div>
        )
    }

}


const SignOffControl = connect()(SignOff)
export default SignOffControl