export const GET_INITIAL_USER_DATA = 'GET_INITIAL_USER_DATA'

export function getinitalUsers(users) {
    return {
        type: GET_INITIAL_USER_DATA,
        users,
    }
}