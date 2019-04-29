
import React, { Component } from 'react'

class iteam_best_top extends Component {
  render() {
    return (
      <div>
         <div className="feature-post relative">
    <div className="feature-img relative">
      <div className="overlay overlay-bg" />
      <img className="img-fluid" src ={this.props.info.img} alt />
    </div>
    <div className="details">
      <ul className="tags">
        <li>
          <a href="#">Food Habit</a>
        </li>
      </ul>
      <a href="image-post.html">
        <h3>{this.props.info.title}</h3>
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
export default iteam_best_top
