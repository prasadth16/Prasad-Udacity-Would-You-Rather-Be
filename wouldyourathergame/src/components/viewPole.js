import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ProgrssBar from './progressbar'
import '../style/viewpole.min.css'

class ViewPole extends Component {
    state = {
        optionOnePer: "",
        optionTwoPer: "",
    }
    componentDidMount() {
        this.setState({
            optionOnePer: (this.props.optionOneVotes * 100) / this.props.totalVotes,
            optionTwoPer: (this.props.optionTwoVotes * 100) / this.props.totalVotes
        })
    }
    render() {
        if (this.props.userNames.filter(user => user.id === this.props.authedUser).length === 0)
            return (
                <Redirect to="/" />
            )
        return (
            <div>
                <div className="container" styles="width: 620px;height: 329px;">
                    <div className="row">
                        <div className="col">
                            <h1 styles="width: 455px;">Asked By: {this.props.question.author}</h1>
                        </div>
                    </div>
                    <div className="row" styles="height: 194px;">
                        <div className="col"><img styles="margin: 63px;margin-left: 107px;" src={this.props.user.avatarURL} height="300" width="300" /></div>
                        <div className="col">
                            <div className="row">
                                <div className="col"><strong>Option One: Would You Rather</strong></div>
                            </div>
                            <div className="row">
                                <div className="col"><strong>{this.props.question.optionOne.text}</strong>
                                    {this.props.myVote === 1 &&
                                        <div styles="background-color: green"><strong>Your Vote</strong></div>
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col"><ProgrssBar percentage={(this.props.optionOneVotes * 100) / this.props.totalVotes} /></div>
                            </div>
                            <div className="row">
                                <div className="col"><em>{this.props.optionOneVotes} out Of {this.props.totalVotes} Votes</em></div>
                            </div>
                            <div className="row">
                                <div className="col"><strong>Option Two: Would You Rather</strong></div>
                            </div>
                            <div className="row">
                                <div className="col"><strong>{this.props.question.optionTwo.text}</strong>
                                    {this.props.myVote === 2 &&
                                        <div styles="background-color: green"><strong>Your Vote</strong></div>
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col"><ProgrssBar percentage={(this.props.optionTwoVotes * 100) / this.props.totalVotes} /></div>
                            </div>
                            <div className="row">
                                <div className="col"><em>{this.props.optionTwoVotes} Out Of {this.props.totalVotes} Votes</em></div>
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
    Object.entries(users).forEach((entry) => userNames.push(entry[1]))
    const user = userNames.filter(user => user.id === question.author)
    let totalVotes
    let optionOneVotes
    let optionTwoVotes
    let myVote = 0
    if (typeof question !== 'undefined') {
        totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
        optionOneVotes = question.optionOne.votes.length
        optionTwoVotes = question.optionTwo.votes.length
        if (question.optionOne.votes.includes(authedUser))
            myVote = 1
        if (question.optionTwo.votes.includes(authedUser))
            myVote = 2
    }


    return {
        id: id,
        question: question,
        userNames: userNames,
        authedUser: authedUser,
        user: user[0],
        totalVotes,
        optionOneVotes,
        optionTwoVotes,
        myVote
    }
}

const ViewPoleControl = connect(mapStateToProps)(ViewPole)
export default ViewPoleControl