import axios from "axios";
import { REQUEST_VIDEOS, RECEIVE_VIDEOS, VIDEO_ERROR, REMOVE_VIDEOS } from "./types.js";

const requestVideos = () => ({
  type: REQUEST_VIDEOS,
  payload: true
});

const receiveVideos = data => ({
  type: RECEIVE_VIDEOS,
  payload: data
});

export const fetchVideos = keyword => async dispatch => {
  dispatch(requestVideos());
  const request = await axios.get('/api/data', {
    params: {
      keyword
    }
  });
  const { data } = request;
  dispatch(receiveVideos(data));
};

export const removeVideos = () => {
  return {
    type: REMOVE_VIDEOS,
    payload: []
  };
};
