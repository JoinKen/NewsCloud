import React, { Component } from "react";
import "../../App.css";
// import component
import Header from "../AllLoad/Header";
import Abouts from '../About/about';

import Footer from "../AllLoad/Footer";
class About extends Component {
    render() {
        return (
            <div className="site-main-container">
                <Header />
                <section className="latest-post-area">
                    <div className="container no-padding">
                        <div className="row">
                            <div className="col-lg-12 post-list">
                                <Abouts />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}
export default About;