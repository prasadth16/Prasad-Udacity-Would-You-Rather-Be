import React, { Component } from 'react';
import QuestionDetails from './questionDetails'
class Answered extends Component {
    render() {
        return (<div>
            {this.props.questions.map((question) => {
                const user = this.props.users.filter((user) => user.id === question.author);

                return (<div key={question.id}>
                    <QuestionDetails question={question} user={user[0]} needAnswer={false}></QuestionDetails>
                </div>)
            })}
        </div>)
    }
}

export default Answered