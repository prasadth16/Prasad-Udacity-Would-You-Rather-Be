import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../style/newQuestion.min.css'
import { saveNewQuestion } from '../actions/questions'

class NewQuestion extends Component {

    addQuestion = () => {
        const optOneText = document.getElementById("option1").value
        const optTwoText = document.getElementById("option2").value
        this.props.dispatch(saveNewQuestion(optOneText, optTwoText, this.props.authedUser))
    }

    render() {

        if (this.props.users.filter(user => user.id === this.props.authedUser).length === 0)
            return (
                <Redirect to="/" />
            )
        return (<div>
            <div>
                <ul className="nav nav-tabs"></ul>
                <div className="tab-content">
                    <div className="tab-pane" role="tabpanel" id="tab-1"></div>
                    <div className="tab-pane" role="tabpanel" id="tab-2">
                        <p>Content for tab 2.</p>
                    </div>
                    <div className="tab-pane" role="tabpanel" id="tab-3">
                        <p>Content for tab 3.</p>
                    </div>
                </div>
            </div>
            <div className="container" styles="width: 569px;height: 278px;margin-right: 156px;">
                <div className="row" styles="width: 569px;height: 54px;min-width: 21px;">
                    <div className="col">
                        <h1 styles="width: 337px;margin-right: 8px;">Your Question:</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1>Would You Rather---</h1>
                    </div>
                </div>
                <div className="row" styles="width: 569px;height: 55px;">
                    <div className="col"><strong>Option One:</strong><input type="text" styles="margin-bottom: 18px;margin-right: 19px;width: 420px;" id="option1" /></div>
                </div>
                <div className="row" styles="height: 51px;">
                    <div className="col"><strong>Option Two:</strong><input type="text" styles="width: 421px;" id="option2" /></div>
                </div>
                <div className="row" styles="height: 63px;">
                    <div className="col"><button className="btn btn-primary" type="button" styles="margin: 24px;margin-right: 1px;margin-top: 19px;margin-left: 157px;" onClick={() => this.addQuestion(this.props.authedUser)}>SUBMIT YOUR QUESTION</button></div>
                </div>
            </div>
        </div>)
    }
}

function mapObjects({ authedUser, users }) {
    let userNames = []
    Object.entries(users).forEach((entry) => userNames.push(entry[1]))
    return {
        users: userNames,
        authedUser: authedUser,
    }
}

const NewQuestionControl = connect(mapObjects)(NewQuestion)
export default NewQuestionControl