import * as Types from "../Constant/ActionType";
var initialState = [];

const post = (state = initialState, action) => {
  let json;
  switch (action.type) {
    case Types.SELECT_POST:
      json = {
        code: "ok",
        data: action.data
      };
      state = json;
      console.log(state.code);
      return state;

    case Types.SELECT_POST_ERR:
      json = {
        code: "err",
        data: action.message
      };
      state = json;
      return state;
    case Types.INSERT_POST:
      console.log("state post");
      console.log(state);
      console.log(action.data);
     // state = state.data.push(action.data);
      // state = [...state,action.data];
      return state;

    default:
      return state;
  }


};
export default post;
