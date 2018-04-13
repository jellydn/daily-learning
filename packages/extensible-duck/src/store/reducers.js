import { combineReducers } from 'redux'
import { userDuck } from '../duck'

export default combineReducers({ [userDuck.store]: userDuck.reducer })
