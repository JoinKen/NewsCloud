import React, { Component } from "react";
import "../../App.css";
// import component
import Header from "../AllLoad/Header";
import LastNews from '../LastPosts/listLastPosts';


import Footer from "../AllLoad/Footer";
class lastPage extends Component {
  render() {
    return (
     
        <div className="site-main-container">
          <Header/>
        <section className="latest-post-area pb-120">
                  <div className="container no-padding">
                      <div className="row">
                          <div className="col-lg-8 post-list">
              <LastNews/>
         
              </div>
              </div>
              </div>
              </section>
              <Footer/>
        </div>
      
    );
  }
}
export default lastPage;