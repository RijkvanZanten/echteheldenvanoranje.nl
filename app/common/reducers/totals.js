const defaultState = {
  isLoading: false,
  years: {
    '1940': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '1941': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '1942': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '1943': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '1944': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '1945': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
};

const totals = function(state = defaultState, action) {
  switch(action.type) {

    case 'GET_TOTALS':
      return {
        ...state,
        isLoading: true
      };

    case 'SET_TOTALS':
      return {
        ...state,
        isLoading: false,
        years: action.totals
      };

    default:
      return state;
  }
};

export default totals;
