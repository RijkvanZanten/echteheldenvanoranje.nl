export function getLocalIfNeeded(location) {
  return function(dispatch, getState) {
    dispatch(setLocalSearchQuery(location));
    const state = getState();
    if(state.people.savedLocations.indexOf(location.toLowerCase()) === -1) {
      dispatch(getLocal(location));
    }
  };
}

function setLocalSearchQuery(q) {
  return {
    type: 'SET_SEARCH_QUERY',
    q
  };
}

export function getLocal(location) {
  return {
    type: 'GET_LOCAL',
    server: true,
    location
  };
}

export function setLocal(localData, location) {
  return {
    type: 'SET_LOCAL',
    localData,
    location
  };
}
