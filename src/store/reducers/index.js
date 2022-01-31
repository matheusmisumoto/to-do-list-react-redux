import { combineReducers } from 'redux';
import toDo from './toDo'

// Unite all reducers in a single package
// with all their initial states and their rules for each action
export default combineReducers({
    toDo
})