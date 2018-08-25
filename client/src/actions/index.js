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
  const apiKey = "AIzaSyDnvAQCVMikrY0doIuuPeM-FkI5Bbf8ROo";
  const request = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&videoSyndicated=true&q=${keyword}&key=${apiKey}`);
  const { data } = request;
  dispatch(receiveVideos(data));
};

export const removeVideos = () => {
  return {
    type: REMOVE_VIDEOS,
    payload: []
  };
};
