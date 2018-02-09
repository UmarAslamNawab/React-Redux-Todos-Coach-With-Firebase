import { combineReducers } from 'redux'
import user from './reducer_user'
import todos from './reducer_todos'
import completeTodos from './reducer_completd_todos'

export default combineReducers({ user, todos , completeTodos})