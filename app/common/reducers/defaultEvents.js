const defaultState = {
  isLoading: false,
  items: []
};

const defaultEvents = function (state = defaultState, action) {
  switch(action.type) {
    case 'GET_DEFAULT_EVENTS':
      return {
        ...state,
        isLoading: true
      };

    case 'SET_DEFAULT_EVENTS':
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

export default defaultEvents;
