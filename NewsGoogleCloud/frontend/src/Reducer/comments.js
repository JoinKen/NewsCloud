import * as Types from "../Constant/ActionType";
var initialState = [];

const comment = (state = initialState, action) => {
  let json;
  switch (action.type) {
    case Types.SELECT_CMT:
      json = {
        code: "ok",
        data: action.data
      };
      state = json;
      console.log(state.code);
      return state;

    case Types.SELECT_CMT_ERR:
      json = {
        code: "err",
        data: action.message
      };
      state = json;
      return state;
    default:
      return state;
  }
};
export default comment;
