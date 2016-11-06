import { combineReducers } from 'redux';

// Import individual reducers
import people from './people';

// Combine all reducers to one reducer to rule them all
const rootReducer = combineReducers({ people });

export default rootReducer;
