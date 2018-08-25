import { REMOVE_VIDEOS } from "./../actions/types";

const initialState = {
  data: [],
  found: null
};

function videosReducer(state = initialState, action) {
  switch (action.type) {
    // case FETCH_VIDEOS:
    //   return {
    //     ...state,
    //     data: action.payload,
    //     found: true
    //   };
    case REMOVE_VIDEOS:
      return {
        ...state,
        data: action.payload,
        found: null
      };
    default:
      return state;
  }
}

export default videosReducer;
