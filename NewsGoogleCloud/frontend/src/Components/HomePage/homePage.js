import React, { Component } from "react";
import "../../App.css";
// import component
import Header from "../AllLoad/Header";
import Contents from "../HomePage/ContentsWeb";
import Footer from "../AllLoad/Footer";
class homePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Contents />
        <Footer />
      </div>
    );
  }
}
export default homePage;
