import axios from "axios";
import { FETCH_VIDEOS, REMOVE_VIDEOS } from "./types.js";

export const fetchVideos = keyword => async dispatch => {
  const apiKey = "AIzaSyDnvAQCVMikrY0doIuuPeM-FkI5Bbf8ROo";
  const request = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&videoSyndicated=true&q=${keyword}&key=${apiKey}`);
  const { data } = request;
  dispatch({ type: FETCH_VIDEOS, payload: data });
}

export const removeVideos = () => {
  return {
    type: REMOVE_VIDEOS,
    payload: []
  };
}
