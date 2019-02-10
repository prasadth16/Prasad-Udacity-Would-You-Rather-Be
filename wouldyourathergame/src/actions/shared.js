//import { _getUsers, _getQuestions } from '../util/_DATA'
import { getInitialData } from '../util/api'
import { getinitalQuestions } from './questions'
import { getinitalUsers } from './user'
export function getinitialData() {
    return (dispatch) => {
        return getInitialData().then(({ questions, users }) => {
            dispatch(getinitalQuestions(questions))
            dispatch(getinitalUsers(users))
        })

    }
}