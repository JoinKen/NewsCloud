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
export const getCommentPost = data =>{
  return {
    type:Types.SELECT_CMT,
    data
  }

}
// export const insertPost = data =>{
//   return {
//     type: Types.INSERT_POST,
//     data
//   }
// }
export const getAllPost = () => {
  return (dispatch) => {
    return callApi("listPost", "GET").then(res => {
      console.log('listpost');
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
export const getCommentPostAct =() =>{
  return (dispatch)=>{
    return callApi("getCommentPost","GET").then (res =>{
      if(res.data.length <=0){
        dispatch(getError(res.data));
      }
      else{
        dispatch(getCommentPost(res.data));
      }
    })
  }
}
// export const insertPostAct =(tag,title,des,topic,img) =>{
//   return (dispatch) =>{
//     return callApi("createPost","POST",{
//       "tag" : tag,
//       "title": title,
//       "describe": des,
//       "topic": topic,
//       "img": img
//     },
//     {
//       headers: {
//           'content-type': 'multipart/form-data'
//       }
//   }
//   ).then(res =>{
//     console.log("post action");
//     console.log(res);
//     // if(res.length <= 0){
//     //   dispatch(getError(res))
//     // }
//     // else{
//     //   dispatch(insertPost(res))
//     // }
//   })
//   }
// }
