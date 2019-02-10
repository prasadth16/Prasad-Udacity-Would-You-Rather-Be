import React, { Component } from 'react';
import { getinitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LoginControl from './login'
import HomeControll from './home'
import Header from './header'
class MainContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getinitialData())
    }

    render() {

        return (
            <Router>

                <div>
                    <div>
                        <Header />
                        <hr styles="border: 100px solid blue;"/>
                    </div>
                    <div>
                        <Route path='/' exact component={LoginControl} />
                        <Route path='/home' exact component={HomeControll} />
                    </div>
                </div>
            </Router>
        )
    }
}

const MainContainerController = connect()(MainContainer)

export default MainContainerController