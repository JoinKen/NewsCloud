import React, { Component } from "react";
import * as actions from "../../Actions/post_action.js";
import { connect } from "react-redux";
import Post from "../LastPosts/postLast";
// import post from "../../Reducer/posts";
// import { join } from "path";

class listLastPost extends Component {
  /* nơi đầu tiên dc khởi chạy component
  khởi tạo các giá trị của state và đọc những giá trị props dc truyền vào
  */
  constructor(props) {
    super(props);
    this.state = {
      posts: {},
      //   comments: {},
      haveData: false,
      //  haveComment: false,
      idPost: "",
      tag: "",
      title: "",
      describe: "",
      numberOfRead: "",
      topic: "",
      img: "",
      countPost: "",

    };
  }
  // Hàm này gọi khi component dc khởi tạo thông qua constructor
  componentWillMount() {
    this.props.getAllPost();
    //   this.props.getCommentPostAct();
    // this.props.getAllComment();
  }
  /* Hàm này dc gọi khi component nhận dc một props mới*/
  componentWillReceiveProps(nextProps) {
    if (nextProps.posts.code === "ok") {
      this.setState({
        posts: nextProps.posts.data,
        // comments:nextProps.comments.data,
        haveData: true
      });
    }
    // if (nextProps.comments.code === "ok") {
    //   this.setState({
    //     comments: nextProps.comments.data,
    //     haveComment: true

    //   })
  }
  showPost = () => {
    let result, x;
    let arr = [];

    if (this.state.haveData === true) {
      result = this.state.posts.map((item, index) => {
        if (index >= 1 && index < 4) {
          return <Post key={index} info={item} />
        }
      })
    } else {
      result = <div>Không có dữ liệu</div>;
    }

    return result;
  }
  showIdComment = () => {
    let cmt, x;
    let info = [];
    if (this.state.haveComment === true) {
      cmt = this.state.comments.map((item, index) => {
        info = item.idPost;
        return info;
      });
    }
    else {
      cmt = <div>Không có dữ liệu</div>;
    }
    return cmt;

  }
  showComment = () => {
    let cmt, x;
    let info = [];
    if (this.state.haveComment === true) {
      cmt = this.state.comments.map((item, index) => {
        info = item;
        // console.log(info.idPost);
        return info;
      });
    }
    else {
      cmt = <div>Không có dữ liệu</div>;
    }
    return cmt;

  }
  render = () => {
    return (
      <div className="latest-post-wrap">
        <h4 className="cat-title">Latest News</h4>

        {this.showPost()}
        {/* {this.showComment()} */}


      </div>
    );
  }
  // Xác định lấy state nào nào store lưu trữ
}
const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments

  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getAllPost: () => {
      dispatch(actions.getAllPost());
    }
    // getCommentPostAct: () => {
    //   dispatch(actions.getCommentPostAct());
    // }

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(listLastPost);
