import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { setAuthedUser } from '../actions/currentUser'

import '../style/login.min.css'
import '../style/login.styles.min.css'
class Login extends Component {

    state = {
        shouldRedirect: false,
        path: '/home'
    }

    handleLogin = () => {
        let userid = document.getElementById("userSelect").value
        if (userid !== "und") {
            this.props.dispatch(setAuthedUser(userid))
            this.setState({ shouldRedirect: true })
        }
    }
    setImageSource = () => {
        let selectedValue = document.getElementById("userSelect").value
        let selectedUser = this.props.userNames.filter(user => user.id === selectedValue)
        if (selectedUser.length > 0)
            document.getElementById("avtImage").src = selectedUser[0].avatarURL
        else
            document.getElementById("avtImage").src = ""
    }
    render() {
        if (this.state.shouldRedirect) {
            return (
                <Redirect to={this.state.path}></Redirect>
            )
        }
        return (
            <div className="contact-clean">
                <form method="post" styles="height: 400px;" >
                    <h2 className="text-center">Who Are You?</h2>
                    <div className="form-row">
                        <div className="col" styles="width: 138px;max-width: 177px;"><img id="avtImage" styles="padding: 10px;opacity: 0.67;border-radius: 50%;"height="42" width="42" /></div>
                        <div className="col">
                            <div className="dropdown"><select className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" styles="width: 198px;" id="userSelect" onChange={() => this.setImageSource()}><option key="und" value="und">Select User</option>
                                {this.props.userNames.map(userName => (
                                    <option key={userName.id} value={userName.id}>{userName.name}</option>
                                )
                                )}
                            </select>
                                <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">First Item</a><a className="dropdown-item" role="presentation" href="#">Second Item</a><a className="dropdown-item" role="presentation" href="#">Third Item</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col"><button className="btn btn-primary" type="button" styles="width: 382px;" onClick={() => this.handleLogin()}>Login</button></div>
                    </div>
                </form>
            </div>
        )
    }
}

function getUserNames({ users }) {
    let userNames = []
    Object.entries(users).forEach((entry) => userNames.push(entry[1]))
    return ({
        userNames: userNames,
    })
}

const LoginControl = connect(
    getUserNames
)(Login)
export default LoginControl