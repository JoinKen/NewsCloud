import React, { Component } from "react";
import ListLastPost from "../LastPosts/listLastPosts";
import ListTopPosts from "../TopPosts/listTopPosts";
import PopularPosts from "../PopularPosts/popularPosts";
import RelevantPosts from "../RelevantPosts/relavantPosts";
import AnotherPosts from "../AnotherPosts/anotherPosts";

class Contents extends Component {
  //Code casc thwcs owr day

  render() {
    return (
      <div className="site-main-container">
      <ListTopPosts/>
      <section className="latest-post-area pb-120">
				<div className="container no-padding">
					<div className="row">
						<div className="col-lg-8 post-list">
            <ListLastPost/>
           <PopularPosts/>
           <RelevantPosts/>
            </div>
            <div className="col-lg-4">
            <AnotherPosts/>
            </div>
            </div>
            </div>
            </section>
      </div>
    );
  }
}
export default Contents;
