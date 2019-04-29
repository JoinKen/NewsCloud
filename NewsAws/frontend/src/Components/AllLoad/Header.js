import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 header-top-left no-padding">
                <ul>
                  <li>
                    <a href="bo">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="bo">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="bo">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="bo">
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 header-top-right no-padding">
                <ul>
                  <li>
                    <a href="tel:+440 012 3654 896">
                      <span className="lnr lnr-phone-handset" />
                      <span>+440 012 3654 896</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@colorlib.com">
                      <span className="lnr lnr-envelope" />
                      <span>support@colorlib.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-wrap">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-4 col-md-4 col-sm-12 logo-left no-padding">
                <a href="index.html">
                  <img className="img-fluid" src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-menu" id="main-menu">
          <div className="row align-items-center justify-content-between">
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active">
                <Link to="/">Home</Link>
                  {/* <a href="index.html">Home</a> */}
                </li>
                <li>
                <Link to="/Post">Relevant Post</Link>
                  {/* <a >Relevant Post</a> */}
                </li>
                <li>
                  <Link to="/LastNews">Lastest New</Link>
                  {/* <a href="category.html">Category</a> */}
                </li>
                <li>
                  <Link to="/PostImage">Post Image</Link>
                  {/* <a href="category.html">Category</a> */}
                </li>
                {/* <li className="menu-has-children">
                  <a href>Post Types</a>
                  <ul>
                    <li>
                      <a href="standard-post.html">Standard Post</a>
                    </li>
                    <li>
                      <a href="image-post.html">Image Post</a>
                    </li>
                    <li>
                      <a href="gallery-post.html">Gallery Post</a>
                    </li>
                    <li>
                      <a href="video-post.html">Video Post</a>
                    </li>
                    <li>
                      <a href="audio-post.html">Audio Post</a>
                    </li>
                  </ul>
                </li> */}
                
                <li>
                 <Link to="/About">About</Link>
                </li>
                <li>
                <Link to="/Contact">Contact</Link>
                </li>
                <li>
                 <Link to="/Login">Login</Link>
                </li>
              </ul>
            </nav>
            {/* bonav-menu-container */}
            <div className="navbar-right">
              <form className="Search">
                <input
                  type="text"
                  className="form-control Search-box"
                  name="Search-box"
                  id="Search-box"
                  placeholder="Search"
                />
                <label htmlFor="Search-box" className="Search-box-label">
                  <span className="lnr lnr-magnifier" />
                </label>
                <span className="Search-close">
                  <span className="lnr lnr-cross" />
                </span>
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
