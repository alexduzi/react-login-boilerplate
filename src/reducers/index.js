import { combineReducers } from 'redux';

const allReducers = combineReducers({
    auth: require('./loginReducer').reducer,
});

export default allReducers;
