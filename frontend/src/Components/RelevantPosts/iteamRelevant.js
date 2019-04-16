
import React, { Component } from 'react';
import { connect } from 'react-redux';

class iteamRelevant extends Component {
  render() {
    return (
      <div>
        <div className="single-relavent-post row align-items-center">
          <div className="col-lg-5 post-left">
            <div className="feature-img relative">
              <div className="overlay overlay-bg" />
              <img className="img-fluid" src={this.props.info.img} alt />
            </div>
            <ul className="tags">
              <li>
                <a href="#">GameShow</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 post-right">
            <a href="image-post.html">
              <h4>{this.props.info.title}</h4>
            </a>
            <ul className="meta">
              <li>
                <a href="#">
                  <span className="lnr lnr-user" />Mark wiens
            </a>
              </li>
              <li>
                <a href="#">
                  <span className="lnr lnr-calendar-full" />{this.props.info.dateAdded.slice(0, 10)}
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="lnr lnr-bubble" />06 Comments
            </a>
              </li>
            </ul>
            <p className="excert">
              {this.props.info.describe}
            </p>
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


export default connect(mapStateToProps, null)(iteamRelevant)
