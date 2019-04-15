
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class contact extends Component {
    render() {
        return (
            <section className="contact-page-area pt-50 pb-120">
            <div className="container">
              <div className="row contact-wrap">
                {/* <div
                  className="map-wrap"
                  style={{ width: "100%", height: 445 }}
                  id="map"
                /> */}
                <div className="col-lg-3 d-flex flex-column address-wrap">
                  <div className="single-contact-address d-flex flex-row">
                    <div className="icon">
                      <span className="lnr lnr-home" />
                    </div>
                    <div className="contact-details">
                      <h5>Los Angeles, USA</h5>
                      <p>56/8, Rocky beach road</p>
                    </div>
                  </div>
                  <div className="single-contact-address d-flex flex-row">
                    <div className="icon">
                      <span className="lnr lnr-phone-handset" />
                    </div>
                    <div className="contact-details">
                      <h5>00 (440) 9865 562</h5>
                      <p>Mon to Fri 9am to 6 pm</p>
                    </div>
                  </div>
                  <div className="single-contact-address d-flex flex-row">
                    <div className="icon">
                      <span className="lnr lnr-envelope" />
                    </div>
                    <div className="contact-details">
                      <h5>support@colorlib.com</h5>
                      <p>Send us your query</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <form
                    className="form-area contact-form text-right"
                    id="myForm"
                    action="mail.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          name="name"
                          placeholder="Enter your name"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter your name'"
                          className="common-input mb-20 form-control"
                          required
                          type="text"
                        />
                        <input
                          name="email"
                          placeholder="Enter email address"
                          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter email address'"
                          className="common-input mb-20 form-control"
                          required
                          type="email"
                        />
                        <input
                          name="subject"
                          placeholder="Enter subject"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter subject'"
                          className="common-input mb-20 form-control"
                          required
                          type="text"
                        />
                      </div>
                      <div className="col-lg-6">
                        <textarea
                          className="common-textarea form-control"
                          name="message"
                          placeholder="Enter Messege"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter Messege'"
                          required
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-lg-12">
                        <div
                          className="alert-msg"
                          style={{ textAlign: "left" }}
                        />
                        <button
                          className="primary-btn primary"
                          style={{ float: "right" }}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          
        )
    }
}
export default contact 
