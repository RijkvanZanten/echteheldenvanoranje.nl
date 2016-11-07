import { combineReducers } from 'redux';

// Import individual reducers
import totals from './totals';
import people from './people';
import events from './events';

// Combine all reducers to one reducer to rule them all
const rootReducer = combineReducers({ totals, people, events });

export default rootReducer;
