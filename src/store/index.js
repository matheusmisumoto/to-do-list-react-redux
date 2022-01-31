import { createStore } from 'redux';
import reducers from './reducers';

// Create a single store with all reducers from the combineReducers
export default createStore(reducers)