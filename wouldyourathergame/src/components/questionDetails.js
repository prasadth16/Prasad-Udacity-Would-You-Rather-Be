import React from 'react'
import '../style/question-details.min.css'

function QuestionDetails({ question, user }) {

    return (
        <div className="container" styles="width: 547px;height: 213px;">
            <div className="row" styles="height: 64px;">
                <div className="col">
                    <h1 styles="padding-right: 82px;width: 311px;margin-left: 49px;"> {user.name} Asks:</h1>
                </div>
            </div>
            <div className="row" styles="height: 150px;">
                <div className="col"><img styles="margin: 51px;margin-right: 26px;margin-bottom: 79px;margin-left: 78px;margin-top: 33px;" src={user.avatarURL} height="42" width="42" /></div>
                <div className="col">
                    <div className="row">
                        <h2>Would You Rather</h2>
                        <br />
                        {question.optionOne.text}
                        <br />
                        {question.optionTwo.text}
                    </div>
                    <div className="row" styles="height: 70px;">
                        <div className="col"><button className="btn btn-primary" type="button" styles="padding-top: 9px;margin-top: 19px;margin-left: 84px;">View Pole</button></div>
                    </div>
                </div>
            </div>
            <hr styles="border: 100px solid blue;"/>
        </div>
    )
}
export default QuestionDetails