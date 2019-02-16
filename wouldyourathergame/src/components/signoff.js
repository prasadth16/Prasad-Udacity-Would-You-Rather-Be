import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'
class SignOff extends Component {
    componentDidMount() {
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