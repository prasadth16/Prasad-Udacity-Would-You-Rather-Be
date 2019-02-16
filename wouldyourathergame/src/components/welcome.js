import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getinitialData } from '../actions/shared'

class Welcome extends Component {

    componentDidMount() {
        this.props.dispatch(getinitialData())
    }
    render() {
        {if(this.props.loading)
            return(
                <div><h1>Loading the Application!!!</h1></div>
            )
        }
        return (
            <div>
                <h1>Hello and Welcome to Pole game!!! Please Log-In to continue....</h1>
            </div>
        )
    }
}
function mapStateToProps({ loading }) {
    return {
        loading: loading,
    }
}
const WelcomeControl = connect(mapStateToProps)(Welcome)
export default WelcomeControl
