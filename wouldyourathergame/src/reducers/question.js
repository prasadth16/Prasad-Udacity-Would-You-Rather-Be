import { GET_INITIAL_QUESTION_DATA } from '../actions/questions'

export function questions(state = {}, action) {
    switch (action.type) {
        case GET_INITIAL_QUESTION_DATA:
            return action.questions
        default:
            return state
    }

}