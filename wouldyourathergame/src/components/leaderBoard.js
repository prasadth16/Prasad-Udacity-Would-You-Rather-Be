import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import LeaderDetails from './leaderdetails'

class LeaderBoard extends Component {
    render() {
        if (this.props.userNames.filter(user => user.id === this.props.authedUser).length === 0)
            return (
                <Redirect to="/" />
            )
        return (
            <div>
                {this.props.userNames.map((user) => (
                    <div key={user.id}>
                        <LeaderDetails user={user} />
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToObject({ users, authedUser }) {
    let userNames = []
    Object.entries(users).forEach((entry) => userNames.push(entry[1]))

    userNames.sort((a, b) => {
        return (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length)
    })
    return {
        userNames: userNames,
        authedUser: authedUser,
    }

}
const LeaderBoardControl = connect(mapStateToObject)(LeaderBoard)

export default LeaderBoardControl

