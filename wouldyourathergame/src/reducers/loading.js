import { GET_INITIAL_QUESTION_DATA } from '../actions/questions'
import { GET_INITIAL_USER_DATA } from '../actions/user'
export function loading(state = [], action) {
    if (action.type === GET_INITIAL_QUESTION_DATA || action.type === GET_INITIAL_USER_DATA)
        return false;
    else
        return state;
}