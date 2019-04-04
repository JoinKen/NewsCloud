import React, { Component } from "react";
import ListLastPost from "../LastPosts/listLastPosts";
class Contents extends Component {
  //Code casc thwcs owr day

  render() {
    return (
      <div className="site-main-container">
        {/* Start latest-post Area */}
        <section className="latest-post-area pb-120">
          <div className="container no-padding">
            <div className="row">
              <div className="col-lg-8 post-list" />
              <ListLastPost />
            </div>
          </div>
        </section>
        {/* End latest-post Area */}
      </div>
    );
  }
}
export default Contents;
