const LOAD_BIDS = 'bids/LOAD'
const ADD_BID = 'bids/ADD'
const REMOVE_BID = 'bids/REMOVE'

// action objects
export const loadBids = (bids) => ({
  type: LOAD_BIDS,
  bids
})

export const addBid = bid => ({
  type: ADD_BID,
  bid
});

export const removeBid = (eventId, bidId) => ({
  type: REMOVE_BID,
  eventId, 
  bidId
  // eventId | dont need it
});


export const getBids = (id) => async dispatch => {
  const response = await fetch(`/api/events/${id}/bids`);
  if (!response.ok) {
      throw response
  }
  // to destructure or not? - how to key into bids obj
  const {bids} = await response.json();
  console.log(bids, "BIDS!!!!")
  dispatch(loadBids(bids));
  // passing in arr to loadEvents 
};


export const createBid = (eventId) => async dispatch => {
  console.log(eventId);
  const response = await fetch(`/api/bids/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({eventId}),
  });

  if (response.ok) {
    const bid = await response.json();
    dispatch(addBid(bid));
    // history.push(`/api/events/${event.id}`)
  }
  // dispatch(loadEvents())
};

export const deleteBid = (eventId, bidId) => async dispatch => {
  console.log(eventId);
  const response = await fetch(`/api/events/${eventId}/bids`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ eventId, bidId}),
  });

  if (response.ok) {
    const bid = await response.json();
    dispatch(removeBid(bid));
    // history.push(`/api/events/${event.id}`)
  }
  // dispatch(loadEvents())
};

const initialState = {
  // events: [],
};

const bidReducer = (state = initialState, action) => {
  switch (action.type) {
      case LOAD_BIDS: 
        const allBids = {};
        action.bids.forEach(bid => {
            allBids[bid.id] = bid;
        });
        return allBids
      case ADD_BID: {
            const newState = {
              ...state,
              [action.bid.id]: action.bid
            };
            return newState;
          }
      // case REMOVE_BID: {
      //   const newState = {...state}
      //   delete newState[bid.id]
      //   return newState
      //   // return newState.events.filter((event) => event.id !== action.id)
      // }
        default:
        return state;
  }
  }
  
export default bidReducer

