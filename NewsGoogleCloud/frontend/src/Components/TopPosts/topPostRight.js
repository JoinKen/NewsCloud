
import React, { Component } from 'react'
import { connect } from "react-redux";

import TopPostsRightItem from './topPostsRightItem';

class topPostRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {},
      haveData: false,
      idPost: "",
      tag: "",
      title: "",
      describe: "",
      dateAdded: "",
      numberOfRead: "",
      topic: "",
      img: "",
    }
  }
  // componentWillMount() {
  //   this.props.getAllPost();
  // }
  componentWillReceiveProps(nextProps) {
    if (nextProps.posts.code === 'ok') {
      this.setState({
        posts: nextProps.posts.data,
        haveData: true
      })
    }
  }
  showTop = () => {
    let result;
    if (this.state.haveData === true) {
      result = this.state.posts.map((iteam, index) => {
        if (iteam.dateAdded === '2019-03-01T17:00:00.000Z' || iteam.dateAdded === '2019-02-01T17:00:00.000Z' )
          return <TopPostsRightItem key={index} info={iteam} />
      });
    }
    else {
      result = <div>Không có dữ liệu</div>
    }
    return result;
  }

  render() {
    return (
      <div>
        {this.showTop()}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps, null)(topPostRight)
