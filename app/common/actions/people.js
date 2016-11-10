export function getLocalIfNeeded(location, timeline) {
  return function(dispatch, getState) {
    const state = getState();

    if(state.people.q !== location && location !== '') dispatch(setLocalSearchQuery(location, timeline));
    if(state.people.savedLocations.indexOf(location.toLowerCase()) === -1 && location !== '') {
      dispatch(getLocal(location));
    }
  };
}

function setLocalSearchQuery(q, timeline) {
  return {
    type: 'SET_SEARCH_QUERY',
    q,
    timeline
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
