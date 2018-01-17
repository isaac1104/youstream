import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import videoReducer from "./videos_reducer";

const rootReducer = combineReducers({
  videos: videoReducer,
  form: formReducer
});

export default rootReducer;
