import { combineReducers } from "redux";
import posts from "../Reducer/posts";
import comments from "../Reducer/comments";
import users from "../Reducer/users";

const appReducers = combineReducers({
  posts,
  comments,
  users
 
});
export default appReducers;
