import { combineReducers } from 'redux';

// Import individual reducers
import totals from './totals';

// Combine all reducers to one reducer to rule them all
const rootReducer = combineReducers({ totals });

export default rootReducer;
