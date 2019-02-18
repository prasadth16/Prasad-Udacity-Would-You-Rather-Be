import React, { Component } from 'react';
//import { getinitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { getinitialData } from '../actions/shared'
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
            <BrowserRouter>
                < div >
                    <div>
                        <Header />
                        <hr styles="border: 100px solid blue;" />
                    </div>
                    <div>
                        <Switch>
                            <Route path='/login' exact strict component={LoginControl} />
                            <Route path='/' exact strict component={Welcome} />
                            <ProtectedRoute exact strict path="/home" component={HomeControll} />
                            <ProtectedRoute exact strict path="/add" component={NewQuestionControl} />
                            <ProtectedRoute exact strict path="/questions/:id" component={ChooseAnswerControl} />
                            <ProtectedRoute exact strict path="/question/:id" component={ViewPoleControl} />
                            <ProtectedRoute exact strict path="/leaderboard" component={LeaderBoardControl} />
                            <ProtectedRoute exact strict path="/logout" component={SignOffControl} />
                            <Route path="*" component={PageNotFound} />
                        </Switch>
                    </div>
                </div >
            </BrowserRouter>

        )
    }
}

const MainContainerController = connect()(MainContainer)

export default MainContainerController