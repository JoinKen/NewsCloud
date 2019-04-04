import { combineReducers } from "redux";
import posts from "../Reducer/posts";

const appReducers = combineReducers({
  posts
});
export default appReducers;
