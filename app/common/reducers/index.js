import { combineReducers } from 'redux';

// Import individual reducers
import totals from './totals';
import people from './people';
import events from './events';
import defaultEvents from './defaultEvents';

// Combine all reducers to one reducer to rule them all
const rootReducer = combineReducers({ totals, people, events, defaultEvents });

export default rootReducer;
