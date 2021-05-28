const EDIT_ACCEPTED = 'accepted/EDIT'
const CREATE_ACCEPTED = 'accepted/CREATE'

export const editAccepted = (id) => ({
  type: EDIT_ACCEPTED,
  id
});

// export const addAccepted = (id) => ({
//   type: CREATE_ACCEPTED,
//   id
// });

// export const createAccepted = (id) => async dispatch => {
//   dispatch(addAccepted(id));
// };


export const updateAccepted = (id) => async dispatch => {
    dispatch(editAccepted(id));
  };

const initialState = { 
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
  11: false,
  12: false,
  13: false,
  14: false,
  15: false,
  16: false,
  17: false,
  18: false,
  19: false,
  20: false,
}

const acceptedReducer = (state = initialState, action) => {
  switch (action.type) {
      // case CREATE_ACCEPTED: {
      //   const newState = {...state}
      //   if (!newState[action.id]) {
      //     newState[action.id] = false
      //   }
      //   return newState
      // }
      case EDIT_ACCEPTED: {
            const newState = {...state}
              const curr = newState[action.id]
              newState[action.id] = !curr
              return newState
      }
        default:
        return state;
  }
  }
  
export default acceptedReducer

