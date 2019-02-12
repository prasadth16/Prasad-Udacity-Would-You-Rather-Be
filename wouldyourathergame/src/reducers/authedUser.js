import { SET_AUTHED_USER, LOGOUT_USER } from '../actions/currentUser'

export function authedUser(state = {}, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.authUser
        case LOGOUT_USER:
            return action.authUser
        default:
            return state
    }
}