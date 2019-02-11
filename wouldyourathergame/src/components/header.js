import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Header extends Component {
    render() {

        return (
            <div styles="width: 138px;max-width: 177px;">
                <table width="100%">
                    <tbody>
                        <tr>
                            <td><Link to="/home">Home</Link></td>
                            <td><Link to="/newquestion">New Question</Link></td>
                            <td><Link to="/leaderboard">Leader Board</Link></td>
                            <td><a href="/logout">Logout</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

    }

}
export default Header