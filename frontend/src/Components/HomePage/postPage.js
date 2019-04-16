import React, { Component } from "react";
import "../../App.css";
// import component
import Header from "../AllLoad/Header";
import RelevantPost from '../RelevantPosts/relavantPosts';
//import PostComment from '../PostComment/postComment';
// import LoadComment from '../LoadComment/loadComent';
import Footer from "../AllLoad/Footer";
class postPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <RelevantPost />
          {/* 
          <PostComment /> */}
        </div>
        {/* <div className="comment">
       
        </div> */}
        <Footer />
      </div>
    );
  }
}
export default postPage;