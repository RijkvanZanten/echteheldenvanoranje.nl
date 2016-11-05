import { combineReducers } from 'redux';

// Import individual reducers
import example from './example';

// Combine all reducers to one reducer to rule them all
const rootReducer = combineReducers({ example });

export default rootReducer;
