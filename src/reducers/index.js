import { combineReducers } from 'redux';
import passwordReducer from './password-reducer.js';

export default combineReducers({
    passwords: passwordReducer
})
