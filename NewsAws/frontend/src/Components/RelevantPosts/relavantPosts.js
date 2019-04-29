
import React, { Component } from 'react'
import IteamRelevant from '../RelevantPosts/iteamRelevant';
import { connect } from 'react-redux';
import * as actions from '../../Actions/postaction';

class relavantPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {},
      haveData: false,
      idPost: "",
      tag: "",
      title: "",
      describe: "",
      numberOfRead: "",
      topic: "",
      img: ""
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

    if (this.state.haveData === true) {
      result = this.state.posts.map((item, index) => {
        if (item.topic === "Giải trí") {
          // topic: 
          console.log(item.title);
          return <IteamRelevant key={index} info={item} />

        }
      });
    } else {
      result = <div>Không có dữ liệu</div>;
    }
    return result;
  };
  render() {
    return (
      <div>
        <div className="relavent-story-post-wrap mt-30">
          <h4 className="title">Relavent Stories</h4>
          <div className="relavent-story-list-wrap">
            {this.showPost()}
          </div>
        </div>

      </div>
    )
  }
}
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

export default connect(mapStateToProps, mapDispatchToProps)(relavantPosts)