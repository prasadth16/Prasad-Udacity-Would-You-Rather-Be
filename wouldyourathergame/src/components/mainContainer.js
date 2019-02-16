import React, { Component } from 'react';
//import { getinitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LoginControl from './login'
import HomeControll from './home'
import Header from './header'
import NewQuestionControl from './newQuestion'
import ChooseAnswerControl from './chooseOption'
import ViewPoleControl from './viewPole'
import LeaderBoardControl from './leaderBoard'
import SignOffControl from './signoff'
import Welcome from './welcome'

class MainContainer extends Component {

    //componentDidMount() {
    //    this.props.dispatch(getinitialData())
    // }

    render() {

        return (
            <Router>

                <div>
                    <div>
                        <Header />
                        <hr styles="border: 100px solid blue;" />
                    </div>
                    <div>
                        <Route path='/login' exact strict component={LoginControl} />
                        <Route path='/' exact strict component={Welcome} />
                        <Route path='/home' exact strict component={HomeControll} />
                        <Route path='/add' exact strict component={NewQuestionControl} />
                        <Route path='/chooseoption/:id' exact component={ChooseAnswerControl} />
                        <Route path='/question/:id' exact component={ViewPoleControl} />
                        <Route path="/leaderboard" exact strict component={LeaderBoardControl} />
                        <Route path="/logout" exact strict component={SignOffControl} />
                    </div>
                </div>
            </Router>
        )
    }
}

const MainContainerController = connect()(MainContainer)

export default MainContainerController