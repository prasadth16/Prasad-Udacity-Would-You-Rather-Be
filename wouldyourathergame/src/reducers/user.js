import { GET_INITIAL_USER_DATA } from '../actions/user'
import { SAVE_NEW_QUESTION, SAVE_ANSWER } from '../actions/questions'

export function users(state = {}, action) {
    switch (action.type) {
        case GET_INITIAL_USER_DATA:
            return action.users
        case SAVE_NEW_QUESTION:
            let questions = []
            let user
            Object.entries(state).forEach((entry) =>
                entry[0] === action.newQuestion.author ?
                    user = entry[1] : ''
            )
            questions = user.questions
            questions.push(action.newQuestion.id)
            return {
                ...state,
                [action.newQuestion.author]: {
                    ...state[action.newQuestion.author],
                    questions: questions
                }
            }
        case SAVE_ANSWER:
            const { authedUser, qid, answer } = action.saveObject
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        default:
            return state
    }
}