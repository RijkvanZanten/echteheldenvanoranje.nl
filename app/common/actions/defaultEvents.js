export function getDefaultEventsIfNeeded() {
  return function(dispatch, getState) {
    const state = getState();

    if(state.defaultEvents.items.length === 0) {
      dispatch(getDefaultEvents());
    }
  };
}

function getDefaultEvents() {
  return {
    type: 'GET_DEFAULT_EVENTS',
    server: true
  };
}

export function setDefaultEvents(events) {
  return {
    type: 'SET_DEFAULT_EVENTS',
    events
  };
}
