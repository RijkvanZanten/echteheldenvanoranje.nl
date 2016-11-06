import defaultState from './peopleDefaultState';

const example = function(state = defaultState, action) {
  switch(action.type) {
    case 'GET_PEOPLE':
      return {
        ...state,
        [action.year]: {
          ...state[action.year],
          [action.month]: {
            ...state[action.year][action.month],
            isLoading: true
          }
        }
      };

    case 'SET_PEOPLE':
      return {
        ...state,
        [action.year]: {
          ...state[action.year],
          [action.month]: {
            ...state[action.year][action.month],
            isLoading: false,
            items: action.items
          }
        }
      };

    default:
      return state;
  }
};

export default example;
