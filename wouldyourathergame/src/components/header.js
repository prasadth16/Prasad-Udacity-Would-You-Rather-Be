import React, { Component } from 'react';

class Header extends Component {
    render() {

        return (
            <div styles="width: 138px;max-width: 177px;">
                <table width="100%">
                    <tbody>
                        <tr>
                            <td><a href="www.google.com">Home</a></td>
                            <td><a href="www.google.com">New Question</a></td>
                            <td><a href="www.google.com">Leader Board</a></td>
                            <td><a href="www.google.com">Logout</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

    }

}
export default Header