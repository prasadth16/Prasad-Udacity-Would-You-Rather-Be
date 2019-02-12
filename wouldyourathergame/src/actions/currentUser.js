export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export function setAuthedUser(authUser) {
    return ({
        type: SET_AUTHED_USER,
        authUser
    })

}

export function logout() {
    return {
        type: LOGOUT_USER,
        authUser: {}
    }
}
