const defaultState = {
  isLoading: false,
  items: []
};

const events = function (state = defaultState, action) {
  switch(action.type) {
    case 'GET_EVENTS':
      return {
        ...state,
        isLoading: true
      };

    case 'SET_EVENTS':
      return {
        ...state,
        isLoading: false,
        items: action.events
      };

    default: {
      return state;
    }
  }
};

export default events;
