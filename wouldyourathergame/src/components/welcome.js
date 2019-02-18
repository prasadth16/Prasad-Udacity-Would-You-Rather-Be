import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getinitialData } from '../actions/shared'

class Welcome extends Component {

    
    render() {
        {if(this.props.loading)
            return(
                <div><h1>Loading the Application!!!</h1></div>
            )
        }
        return (
            <div>
                <h1>Hello and Welcome to the game of Polls!!! Please Log-In to continue....</h1>
            </div>
        )
    }
}

const WelcomeControl = connect()(Welcome)
export default WelcomeControl
