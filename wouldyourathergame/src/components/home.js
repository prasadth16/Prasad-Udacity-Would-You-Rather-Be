import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../style/tab.css'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import Answered from './answered'
import Unanswered from './unAnswered'
class Home extends Component {

    render() {
        if (this.props.users.filter(user => user.id === this.props.authedUser).length === 0)
            return (
                <Redirect to="/" />
            )
        return (
            <Router>
                <div>
                    <div>
                        <nav className="main-nav">
                            <ul className="main-nav-ui">
                                <li><Link to="/home/unanswered">UnAnswered Questions</Link></li>
                                <li><Link to="/home/Answered">Answered Questions</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <Redirect to="/home/unanswered" />
                        <Route path="/home/unanswered" exact strict render={() => <Unanswered questions={this.props.unAnsweredQuestions} users={this.props.users} />}></Route>
                        <Route path="/home/Answered" exact strict render={() => <Answered questions={this.props.answeredQuestion} users={this.props.users} />}></Route>
                    </div>
                </div>
            </Router>
        )
    }
}

function processQuestions({ questions, authedUser, users }) {
    let userNames = []
    let answeredQuestion = []
    let unAnsweredQuestions = []
    let allQuestions = []
    Object.entries(questions).forEach((entry) => allQuestions.push(entry[1]))
    answeredQuestion = allQuestions.filter(question => question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
    unAnsweredQuestions = allQuestions.filter(question => !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser))
    Object.entries(users).forEach((entry) => userNames.push(entry[1]))
    return ({
        answeredQuestion: answeredQuestion,
        unAnsweredQuestions: unAnsweredQuestions,
        authedUser: authedUser,
        users: userNames,

    })
}
const HomeControll = connect(processQuestions)(Home)
export default HomeControll