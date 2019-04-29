
import React, { Component } from 'react';
import { connect } from "react-redux";


class topPostsRightItem extends Component {
    render() {
        return (
            <div>
                <div className="single-top-post">
                    <div className="feature-image-thumb relative">
                        <div className="overlay overlay-bg" />
                        <img
                            className="img-fluid"
                            src={this.props.info.img}
                            alt
                        />
                    </div>
                    <div className="top-post-details">
                        <ul className="tags">
                            <li>
                                <a href="#">Food Habit</a>
                            </li>
                        </ul>
                        <a href="image-post.html">
                            <h4>
                                {this.props.info.describe}
                </h4>
                        </a>
                        <ul className="meta">
                            <li>
                                <a href="#">
                                    <span className="lnr lnr-user" />Mark wiens
                  </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="lnr lnr-calendar-full" />
                                    {this.props.info.dateAdded.slice(0,10)}
                  </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="lnr lnr-bubble" />06 Comments
                  </a>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>

        )
    }
}
const mapStateToProps = state => {
    return {
      Posts: state.Posts
    };
  };


export default connect(mapStateToProps,null) (topPostsRightItem);
