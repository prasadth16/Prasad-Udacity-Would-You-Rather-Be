import { GET_INITIAL_USER_DATA } from '../actions/user'

export function users(state = {}, action) {
    switch (action.type) {
        case GET_INITIAL_USER_DATA:
            return action.users
        default:
            return state
    }
}