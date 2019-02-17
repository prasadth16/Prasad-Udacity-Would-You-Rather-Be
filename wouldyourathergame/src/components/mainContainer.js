import React, { Component } from 'react';
//import { getinitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LoginControl from './login'
import HomeControll from './home'
import Header from './header'
import NewQuestionControl from './newQuestion'
import ChooseAnswerControl from './chooseOption'
import ViewPoleControl from './viewPole'
import LeaderBoardControl from './leaderBoard'
import SignOffControl from './signoff'
import Welcome from './welcome'
import ProtectedRoute from './protectedRoute'
import PageNotFound from './pgnotfound'
class MainContainer extends Component {

    render() {

        return (
            <Router>

                <div>
                    <div>
                        <Header />
                        <hr styles="border: 100px solid blue;" />
                    </div>
                    <div>
                        <Switch>
                            <Route path='/login' exact strict component={LoginControl} />
                            <Route path='/' exact strict component={Welcome} />
                            <ProtectedRoute path='/home' exact strict component={HomeControll} />
                            <ProtectedRoute path='/add' exact strict component={NewQuestionControl} />
                            <ProtectedRoute path='/chooseoption/:id' exact component={ChooseAnswerControl} />
                            <ProtectedRoute path='/question/:id' exact component={ViewPoleControl} />
                            <ProtectedRoute path="/leaderboard" exact strict component={LeaderBoardControl} />
                            <ProtectedRoute path="/logout" exact strict component={SignOffControl} />
                            <Route path="*" component={PageNotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

const MainContainerController = connect()(MainContainer)

export default MainContainerController