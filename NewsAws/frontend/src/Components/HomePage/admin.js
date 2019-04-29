import React, { Component } from "react";
import "../../App.css";
// import component
import Header from "../AllLoad/Header";
import Admin from "../Admin/admin";
import Footer from "../AllLoad/Footer";
class adminPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Admin />
        <Footer />
      </div>
    );
  }
}
export default adminPage;
