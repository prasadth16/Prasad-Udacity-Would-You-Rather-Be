import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../style/tab.css'
import { Redirect } from 'react-router-dom'

import Answered from './answered'
import Unanswered from './unAnswered'
import Tabs from './tabs'
class Home extends Component {


    openPage(pageName, elmnt, color) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].styles.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].styles.backgroundColor = "";
        }
        document.getElementById(pageName).styles.display = "block";
        elmnt.styles.backgroundColor = color;
    }

    render() {
        if (this.props.users.filter(user => user.id === this.props.authedUser).length === 0)
            return (
                <Redirect to="/" />
            )
        return (
            <div>
                <Tabs>
                    <div label="Unanswered Questions">
                        <Unanswered questions={this.props.unAnsweredQuestions} users={this.props.users} />!
      </div>
                    <div label="Answered Questions">
                        <Answered questions={this.props.answeredQuestion} users={this.props.users} />
                    </div>

                </Tabs>
            </div>
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