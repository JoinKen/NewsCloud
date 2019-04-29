
import React, { Component } from 'react'
import {connect} from 'react-redux';

class item_best_bot_item extends Component {
  render() {
    return (
          <div className="col-lg-6 single-popular-post">
                        <div className="feature-img-wrap relative">
                            <div className="feature-img relative">
                                <div className="overlay overlay-bg" />
                                <img className="img-fluid" src={this.props.info.img} alt />
                            </div>
                            <ul className="tags">
                                <li>
                                    <a href="#">Travel</a>
                                </li>
                            </ul>
                        </div>
                        <div className="details">
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
                                        <span className="lnr lnr-calendar-full" />{this.props.info.dateAdded.slice(0,10)}
            </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="lnr lnr-bubble" />06{" "}
                                    </a>
                                </li>
                            </ul>
                            <p className="excert">
                            {this.props.info.describe}
        </p>
                        </div>
                    </div>

    )
  }
}
const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps,null)(item_best_bot_item) 
