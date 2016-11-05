const defaultState = {
  items: []
};

const example = function(state = defaultState, action) {
  switch(action.type) {
    case 'EXAMPLE':
      return {
        ...state
      };

    default:
      return state;
  }
};

export default example;
