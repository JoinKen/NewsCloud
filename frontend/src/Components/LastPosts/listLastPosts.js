import React, { Component } from "react";
import * as actions from "../../Actions/post_action";
import { connect } from "react-redux";
import Post from "../LastPosts/postLast";

class listLastPost extends Component {
  /* nơi đầu tiên dc khởi chạy component
  khởi tạo các giá trị của state và đọc những giá trị props dc truyền vào
  */
  constructor(props) {
    super(props);
    this.state = {
      posts: {},
      haveData: false,
      idPost: "",
      tag: "",
      title: "",
      describe: ""
    };
  }
  // Hàm này gọi khi component dc khởi tạo thông qua constructor
  componentWillMount() {
    this.props.getAllPost();
  }
  /* Hàm này dc gọi khi component nhận dc một props mới*/
  componentWillReceiveProps(nextProps) {
    if (nextProps.posts.code === "ok") {
      this.setState({
        posts: nextProps.posts.data,
        haveData: true
      });
    }
  }
  showPost = () => {
    let result;
    console.log(this.state);
    console.log(this.state.posts);
    if (this.state.haveData === true) {
      result = this.state.posts.map((item, index) => {
        return <Post key={index} info={item} />;
      });
    } else {
      result = <div>Không có dữ liệu</div>;
    }
    return result;
  };
  render() {
    return (
      <div className="latest-post-wrap">
        <h4 className="cat-title">Latest News</h4>
        {this.showPost()}
      </div>
    );
  }
}
// Xác định lấy state nào nào store lưu trữ

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getAllPost: () => {
      dispatch(actions.getAllPost());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(listLastPost);
