const LOAD_EVENTS = 'events/LOAD'
const ADD_EVENT = 'events/ADD'
const REMOVE_EVENT = 'events/REMOVE'
const UPDATE_EVENT ='events/UPDATE'

// action objects
export const loadEvents = (events) => ({
  type: LOAD_EVENTS,
  events
})

export const addEvent = event => ({
  type: ADD_EVENT,
  event
});

export const removeEvent = id => ({
  type: REMOVE_EVENT,
  id
});

// export const updateEvents = event => ({
//   type: UPDATE_EVENT,
//   event
// })


// thunks

// export const getEvents = () => async dispatch => {
//   const response = await fetch('/api/events');
//   if(response.ok){
//     const data = await response.json();
//     const events = data.events
//     dispatch(loadEvents(events));
//     return events
//   }
// };

export const getEvents = () => async dispatch => {
  const response = await fetch('/api/events/');
  if (!response.ok) {
      throw response
  }
  const {events} = await response.json();
  dispatch(loadEvents(events));
  // passing in arr to loadEvents 
};

export const createEvent = (title,eventType,venueType,venuePhoto,musicType,address,size,price,description) => async dispatch => {
  console.log(title,eventType,venueType,venuePhoto,musicType,address,size,price,description, "NEW EVENT DATA!!!!!");
  const response = await fetch('/api/events/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title,eventType,venueType,venuePhoto,musicType,address,size,price,description}),
  });

  if (response.ok) {
    const event = await response.json();
    dispatch(addEvent(event));
    // history.push(`/api/events/${event.id}`)
  }
  // dispatch(loadEvents())
};

export const deleteEvent = (id) => async dispatch => {
  const response = await fetch(`/api/events/${id}`, {
    method: 'DELETE',
  });
  debugger
  if (response.ok) {
    dispatch(removeEvent(id));
    // dispatch(getEvents())
  }
  // const {successMSG} = await response.json();
  // passing in arr to loadEvents 
};


// export const updateEvent = (formData, id) => async dispatch => {
//   const response = await fetch(`/api/events/${id}`, {
//     method: 'PUT',
//     body: formData
//   })
//   if(response.ok){
//     const event = await response.json()
//     dispatch(updateEvents(event))
//   }
// }

// const mapList = (list) => {
//   return list.map((event) => event.id);
// };

const initialState = {
  // events: [],
};


const eventReducer = (state = initialState, action) => {
  switch (action.type) {
      case LOAD_EVENTS: 
        const allEvents = {};
        action.events.forEach(event => {
            allEvents[event.id] = event;
        });
        return {
            ...state,
            ...allEvents,
            // events: action.events
        };
      case ADD_EVENT: {
            const newState = {
              ...state,
              [action.event.id]: action.event
            };
            return newState;
          }
      case REMOVE_EVENT: {
        const newState = {...state}
        // return newState.filter((event) => event.id !== action.id)
        delete newState[action.id]
        return newState
      }
        default:
        return state;
  }
  }
  
export default eventReducer

// v1
// const eventReducer = (state = initialState, action) => {
//   switch(action.type){
//     case LOAD_EVENTS:{
//       const events = {};
//       action.events.forEach(event => {
//         events[event.id] = event;
//       });
//       return {
//         ...state,
//         ...events,
//         eventsList: mapList(action.events),
//       };
//     }
    // case ADD_EVENT:{
    //   if (!state[action.event.id]) {
    //     const newState = {
    //     ...state,
    //     [action.event.id]: action.event
    //     };
    //     const eventsList = newState.eventsList.map(id => newState[id]);
    //     eventsList.push(action.event);
    //     newState.eventsList = mapList(eventsList)
    //     return newState;
    //   }
    // }
    // case UPDATE_EVENT:{
    //   return {
    //     ...state,
    //     [action.event.id] : action.event
    //   }
    // }
    // case REMOVE_EVENT:{
    //   const newState = {...state}
    //   const eventsList = newState.eventsList.map(id => newState[id]);
    //   const newEventList = eventsList.filter(event => event.id !== action.id);
    //   newState.eventsList = mapList(newEventList)
    //   delete newState[action.id];
    //   return newState;
    // }
//     default : {
//       return state
//     }
//   }
// }

