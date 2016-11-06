export function getPeopleIfNeeded(month, year) {
  return function(dispatch, getState) {
    const state = getState();
    if(state.people[year][month].items.length === 0 && state.people[year][month].isLoading === false) {
      dispatch(getPeople(month, year));
    }
  };
}

export function getPeople(month, year) {
  return {
    type: 'GET_PEOPLE',
    server: true,
    month, year
  };
}

export function setPeople(people, month, year) {
  return {
    type: 'SET_PEOPLE',
    month, year
  };
}
