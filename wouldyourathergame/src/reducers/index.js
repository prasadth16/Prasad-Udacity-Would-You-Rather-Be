import { combineReducers } from 'redux'
import { questions } from './question'
import { users } from './user'
import { authedUser } from './authedUser'
import { loading } from './loading'

export default combineReducers({ questions, users, authedUser, loading })