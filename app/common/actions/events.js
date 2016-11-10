export function getEventsIfNeeded() {
  return function(dispatch, getState) {
    const state = getState();

    if(state.events.items.length === 0) {
      dispatch(getEvents());
    }
  };
}

function getEvents() {
  return {
    type: 'GET_EVENTS',
    server: true
  };
}

export function setEvents(events) {
  return {
    type: 'SET_EVENTS',
    events
  };
}
