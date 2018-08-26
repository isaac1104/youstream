import { REQUEST_VIDEOS, RECEIVE_VIDEOS, VIDEO_ERROR, REMOVE_VIDEOS } from "./../actions/types";

const initialState = {
  isFetching: false,
  error: false,
  data: []
};

function videosReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_VIDEOS:
      return {
        ...state,
        isFetching: action.payload
      };
    case RECEIVE_VIDEOS:
      return {
        ...state,
        isFetching: false,
        error: false,
        data: action.payload
      };
    case VIDEO_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        data: []
      };
    case REMOVE_VIDEOS:
      return initialState;
    default:
      return state;
  }
}

export default videosReducer;
