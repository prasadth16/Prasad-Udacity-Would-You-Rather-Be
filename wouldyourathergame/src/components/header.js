import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
    render() {

        return (
            <div styles="width: 138px;max-width: 177px;">
                <table width="100%">
                    <tbody>
                        <tr>
                            <td><Link to="/home">Home</Link></td>
                            <td><Link to="/add">New Question</Link></td>
                            <td><Link to="/leaderboard">Leader Board</Link></td>
                            {this.props.userNames.filter(user => user.id === this.props.authedUser).length !== 0 &&
                                <td>Hello {this.props.userNames.filter(user => user.id === this.props.authedUser)[0].name}</td>
                            }
                            {this.props.userNames.filter(user => user.id === this.props.authedUser).length == 0 &&
                                <td><Link to="/login">Log-In</Link></td>
                            }
                            <td><Link to="/logout">Logout</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

    }

}
function mapStateToObject({ users, authedUser }) {
    let userNames = []
    Object.entries(users).forEach((entry) => userNames.push(entry[1]))

    return {
        userNames: userNames,
        authedUser: authedUser
    }
}
const HeaderControl = connect(mapStateToObject)(Header)
export default HeaderControl