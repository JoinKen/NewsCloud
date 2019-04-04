import callApi from "../until/callAPI";
import * as Types from "../Constant/ActionType";

export const getError = message => {
  return {
    type: Types.SELECT_POST_ERR,
    message
  };
};
export const getPost = data => {
  return {
    type: Types.SELECT_POST,
    data
  };
};
export const getAllPost = () => {
  return dispatch => {
    return callApi("listPost", "GET").then(res => {
      console.log(res);
      if (res.data.length <= 0) {
        dispatch(getError(res.data));
      } else {
        console.log(res.data);
        dispatch(getPost(res.data));
      }
    });
  };
};
