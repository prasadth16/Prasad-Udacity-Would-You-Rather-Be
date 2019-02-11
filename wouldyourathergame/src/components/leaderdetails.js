import React from 'react'
import '../style/leaderdetails.min.css'

const LeaderDetails = ({ user }) => {


    return (
        <div>
            <div className="container" styles="height: 179px;width: 832px;">
                <div className="row" styles="height: 180px;width: 831px;">
                    <div className="col"><img styles="margin: 70px;margin-left: 149px;" src={user.avatarURL} height="300" width="300" /></div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <h1>{user.name}</h1> <h2>Total Score: {Object.keys(user.answers).length + user.questions.length}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col"><strong>Answered Questions: {Object.keys(user.answers).length}</strong></div>
                        </div>
                        <div className="row">
                            <div className="col"><strong>Questions Asked: {user.questions.length}</strong></div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}


export default LeaderDetails