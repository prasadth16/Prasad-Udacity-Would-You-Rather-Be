import React, { Component } from 'react'
import '../style/choice.min.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { saveAnswer } from '../actions/questions'

class ChooseAnswer extends Component {
    state = {
        url: ""
    }

    componentDidMount() {
        this.setState({ url: "/question/" + this.props.id })
    }
    submitAnswer = () => {
        let answer
        (document.getElementById('option1').checked) ? answer = "optionOne" : answer = "optionTwo"

        this.props.dispatch(saveAnswer(answer, this.props.question.id, this.props.authedUser))
    }
    chooseOneOption = (id) => {
        document.getElementById(id).checked = false;
    }
    render() {
        {
            if (typeof this.props.question === 'undefined') {
                return (
                    <Redirect to="/pagenotfound" />)
            }
        }

        return (

            <div>
                <div className="container" styles="width: 752px;height: 209px;">
                    <div className="row" styles="width: 752px;">
                        <div className="col" styles="width: 556px;">
                            <h1 styles="width: 564px;">{this.props.question.author} Asks:</h1>
                        </div>
                    </div>
                    <div className="row" styles="width: 752px;height: 153px;">
                        <div className="col"><img styles="margin: 54px;margin-left: 133px;" src={this.props.user.avatarURL} height="42" width="42" /></div>
                        <div className="col">
                            <div className="row">
                                <div className="col"><strong>Would You Rather:</strong></div>
                            </div>
                            <div className="row" styles="height: 41px;">
                                <div className="col">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="option1" onClick={() => this.chooseOneOption("option2")} /><label className="form-check-label" >{this.props.question.optionOne.text}</label></div>
                                </div>
                            </div>
                            <div className="row" styles="height: 44px;">
                                <div className="col">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="option2" onClick={() => this.chooseOneOption("option1")} /><label className="form-check-label" >{this.props.question.optionTwo.text}</label></div>
                                </div>
                            </div>
                            <div className="row" styles="height: 43px;">
                                <div className="col"><Link className="btn btn-primary" type="button" to={this.state.url} >
                                    <span onClick={() => this.submitAnswer()}>
                                        Submit Answer
                                </span></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ questions, users, authedUser }, props) {
    const { id } = props.match.params
    let question
    Object.entries(questions).forEach((entry) =>
        entry[0] === id ?
            question = entry[1] : ''
    )
    let userNames = []
    let user = []

    if (typeof question !== 'undefined') {
        Object.entries(users).forEach((entry) => userNames.push(entry[1]))
        user = userNames.filter(user => user.id === question.author)
    }
    return {
        id: id,
        question: question,
        userNames: userNames,
        authedUser: authedUser,
        user: user[0]
    }
}
const ChooseAnswerControl = connect(mapStateToProps)(ChooseAnswer)
export default ChooseAnswerControl