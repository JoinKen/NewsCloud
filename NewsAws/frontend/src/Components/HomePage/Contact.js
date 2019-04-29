import React, { Component } from "react";
import "../../App.css";
// import component
import Header from "../AllLoad/Header";
import Contacts from '../Contact/contact';
import Footer from "../AllLoad/Footer";
class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <Contacts/>
        <Footer />
      </div>
    );
  }
}
export default Contact;
