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
export const getCommentErr = message => {
  return {
    type: Types.SELECT_CMT_ERR,
    message
  }
}
export const getComment = data => {
  return {
    type: Types.SELECT_CMT,
    data
  }

}
export const getAllPost = () => {
  return (dispatch) => {
    return callApi("listPost", "GET").then(res => {
      console.log(res);
      if (res.data.length <= 0) {
        dispatch(getError(null));
      } else {
        console.log(res.data);
        dispatch(getPost(res.data));
      }
    });
  };
};
export const getCommentPost = () => {
  return (dispatch) => {
    return callApi("listComment", "GET").then(res => {
      if (res.data.length <= 0) {
        dispatch(getCommentErr(null))
      }
      else {
        dispatch(getComment(res.data));
      }
    })
  }
}
