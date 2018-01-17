import { FETCH_VIDEOS, REMOVE_VIDEOS } from "./../actions/types";

const initialState = {
  data: []
};

function videosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_VIDEOS:
      return {
        ...state,
        data: action.payload
      };
    case REMOVE_VIDEOS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

export default videosReducer;
