import callApi from "../until/callAPI";
import * as Types from "../Constant/ActionType";

export const getError = message => {
  return {
    type: Types.SELECT_CMT_ERR,
    message
  };
};
export const getComment = data => {
  return {
    type: Types.SELECT_CMT,
    data
  };
};
export const getAllComment = () => {
  return (dispatch) => {
    return callApi("listComment", "GET").then(res => {
      console.log(res);
      if (res.data.length <= 0) {
        dispatch(getError(res.data));
      } else {
        console.log(res.data);
        dispatch(getComment(res.data));
      }
    });
  };
};
