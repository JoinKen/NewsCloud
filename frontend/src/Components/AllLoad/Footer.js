import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 single-footer-widget">
              <h4>Top Products</h4>
              <ul>
                <li>
                  <a href="bo">Managed Website</a>
                </li>
                <li>
                  <a href="bo">Manage Reputation</a>
                </li>
                <li>
                  <a href="bo">Power Tools</a>
                </li>
                <li>
                  <a href="bo">Marketing Service</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="bo">Jobs</a>
                </li>
                <li>
                  <a href="bo">Brand Assets</a>
                </li>
                <li>
                  <a href="bo">Investor Relations</a>
                </li>
                <li>
                  <a href="bo">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Features</h4>
              <ul>
                <li>
                  <a href="bo">Jobs</a>
                </li>
                <li>
                  <a href="bo">Brand Assets</a>
                </li>
                <li>
                  <a href="bo">Investor Relations</a>
                </li>
                <li>
                  <a href="bo">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="bo">Guides</a>
                </li>
                <li>
                  <a href="bo">Research</a>
                </li>
                <li>
                  <a href="bo">Experts</a>
                </li>
                <li>
                  <a href="bo">Agencies</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 single-footer-widget">
              <h4>Instragram Feed</h4>
              <ul className="instafeed d-flex flex-wrap">
                <li>
                  <img href="%PUBLIC_URL%/img/i1.jpg" alt="j" />
                </li>
                <li>
                  <img href="%PUBLIC_URL%/img/i2.jpg" alt="j" />
                </li>
                <li>
                  <img href="%PUBLIC_URL%/img/i3.jpg" alt="j" />
                </li>
                <li>
                  <img href="%PUBLIC_URL%/img/i4.jpg" alt="j" />
                </li>
                <li>
                  <img href="%PUBLIC_URL%/img/i5.jpg" alt="j" />
                </li>
                <li>
                  <img href="%PUBLIC_URL%/img/i6.jpg" alt="j" />
                </li>
                <li>
                  <img href="%PUBLIC_URL%/img/i7.jpg" alt="j" />
                </li>
                <li>
                  <img href="%PUBLIC_URL%/img/i8.jpg" alt="j" />
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom row align-items-center">
            <p className="footer-text m-0 col-lg-8 col-md-12">
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with
              <i className="fa fa-heart-o" aria-hidden="true" /> by
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
            <div className="col-lg-4 col-md-12 footer-social">
              <a href="bo">
                <i className="fa fa-facebook" />
              </a>
              <a href="bo">
                <i className="fa fa-twitter" />
              </a>
              <a href="bo">
                <i className="fa fa-dribbble" />
              </a>
              <a href="bo">
                <i className="fa fa-behance" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
