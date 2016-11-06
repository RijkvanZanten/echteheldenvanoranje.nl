import { combineReducers } from 'redux';

// Import individual reducers
import totals from './totals';
import people from './people';

// Combine all reducers to one reducer to rule them all
const rootReducer = combineReducers({ totals, people });

export default rootReducer;
