import { saveQuestion, saveQuestionAnswer } from '../util/api'
import { formatQuestion } from '../util/commonUtils'

export const GET_INITIAL_QUESTION_DATA = 'GET_INITIAL_QUESTION_DATA'
export const SAVE_NEW_QUESTION = 'SAVE_NEW_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function getinitalQuestions(questions) {
    return {
        type: GET_INITIAL_QUESTION_DATA,
        questions,
    }
}

export function saveNewQuestion(opOneText, opTwoText, authedUser) {
    const question = {
        optionOneText: opOneText,
        optionTwoText: opTwoText,
        author: authedUser
    }
    let newQuestion = formatQuestion(question)
    let saveQuestionAction = {
        type: SAVE_NEW_QUESTION,
        newQuestion,
    }

    return (dispatch) => {
        return saveQuestion(question)
            .then((res) => {
                dispatch(saveQuestionAction)
            })
            .catch(() => {
                alert('There was an error. Try again.')
            })
    }
}

export function saveAnswer(answer, qid, authedUser) {
    const saveObject = {
        answer: answer,
        qid: qid,
        authedUser: authedUser,
    }
    const saveAnswerAction = {
        type: SAVE_ANSWER,
        saveObject
    }

    return (dispatch) => {
        return saveQuestionAnswer(saveObject)
            .then((res) => {
                dispatch(saveAnswerAction)
            })
            .catch(() => {
                alert('There was an error. Try again.')
            })
    }
}

