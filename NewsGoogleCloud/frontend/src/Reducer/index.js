import { combineReducers } from "redux";
import posts from "../Reducer/posts";
import comments from "../Reducer/comments";

const appReducers = combineReducers({
  posts,
  comments
});
export default appReducers;
