import { GET_INITIAL_QUESTION_DATA, SAVE_NEW_QUESTION, SAVE_ANSWER } from '../actions/questions'

export function questions(state = {}, action) {
    switch (action.type) {
        case GET_INITIAL_QUESTION_DATA:
            return action.questions
        case SAVE_NEW_QUESTION:
            return {
                ...state,
                [action.newQuestion.id]: action.newQuestion,
            }
        case SAVE_ANSWER:
            const { authedUser, qid, answer } = action.saveObject
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }

        default:
            return state
    }

}