const defaultState = {
  savedLocations: [],
  q: '',
  people: {}
};

const totals = function(state = defaultState, action) {
  switch(action.type) {

    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        q: action.q
      };

    case 'SET_LOCAL':
      return {
        ...state,
        savedLocations: [
          ...state.savedLocations,
          action.location
        ],
        people: {
          ...state.people,
          ...action.localData
        }
      };

    default:
      return state;
  }
};

export default totals;
