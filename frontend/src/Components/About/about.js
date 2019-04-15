import React, { Component } from 'react'
import {Link}  from 'react-router-dom';

class about extends Component {
    render() {
        return (
            <div>
                <section className="top-post-area pt-10">
                    <div className="container no-padding">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hero-nav-area">
                                    <h1 className="text-white">About Us</h1>
                                    <p className="text-white link-nav">
                                    <Link to="/">Home</Link>
                                        {/* <a href="index.html">Home </a>{" "} */}
                                        <span className="lnr lnr-arrow-right" />
                                        <Link to="/About">About us</Link>
                                        {/* <a href="about.html">About Us </a> */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="feedback-area section-gap" id="feedback">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 pb-50 header-text text-center">
                                <h1 className="mb-10">Magazine cung cấp tin tức mới nhất</h1>
                                <p>Mang đến trải nghiệm tuyệt vời cho mọi người</p>
                            </div>
                        </div>
                        <div className="row feedback-contents justify-content-between align-items-center">
                            <div className="col-lg-6 feedback-left">
                                <div className="mn-accordion" id="accordion">
                                    {/*Accordion item*/}
                                    <div className="accordion-item state-open">
                                        <div className="accordion-heading">
                                            <h3>Success</h3>
                                            <div className="icon">
                                                <i className="lnr lnr-chevron-right" />
                                            </div>
                                        </div>
                                        <div
                                            className="accordion-content"
                                            style={{ transitionDuration: "500ms", height: 131 }}
                                        >
                                            <p>
                                                For many of us, our very first experience of learning
                                                about the celestial bodies begins when we saw our
                                                first full moon in the sky. It is truly a magnificent
                                                view even to the naked eye. If the night is clear, you
                                                can see amazing detail of the lunar surface just star
                                                gazing on in your back yard.
              </p>
                                        </div>
                                    </div>
                                    {/*Accordion item*/}
                                    {/*Accordion item*/}
                                    <div className="accordion-item">
                                        <div className="accordion-heading">
                                            <h3>Info</h3>
                                            <div className="icon">
                                                <i className="lnr lnr-chevron-right" />
                                            </div>
                                        </div>
                                        <div
                                            className="accordion-content"
                                            style={{ transitionDuration: "500ms", height: 0 }}
                                        >
                                            <p>
                                                For many of us, our very first experience of learning
                                                about the celestial bodies begins when we saw our
                                                first full moon in the sky. It is truly a magnificent
                                                view even to the naked eye. If the night is clear, you
                                                can see amazing detail of the lunar surface just star
                                                gazing on in your back yard.
              </p>
                                        </div>
                                    </div>
                                    {/*Accordion item*/}
                                    {/*Accordion item*/}
                                    <div className="accordion-item">
                                        <div className="accordion-heading">
                                            <h3>danger</h3>
                                            <div className="icon">
                                                <i className="lnr lnr-chevron-right" />
                                            </div>
                                        </div>
                                        <div
                                            className="accordion-content"
                                            style={{ transitionDuration: "500ms", height: 0 }}
                                        >
                                            <p>
                                                For many of us, our very first experience of learning
                                                about the celestial bodies begins when we saw our
                                                first full moon in the sky. It is truly a magnificent
                                                view even to the naked eye. If the night is clear, you
                                                can see amazing detail of the lunar surface just star
                                                gazing on in your back yard.
              </p>
                                        </div>
                                    </div>
                                    {/*Accordion item*/}
                                    {/*Accordion item*/}
                                    <div className="accordion-item">
                                        <div className="accordion-heading">
                                            <h3>Warning</h3>
                                            <div className="icon">
                                                <i className="lnr lnr-chevron-right" />
                                            </div>
                                        </div>
                                        <div
                                            className="accordion-content"
                                            style={{ transitionDuration: "500ms", height: 0 }}
                                        >
                                            <p>
                                                For many of us, our very first experience of learning
                                                about the celestial bodies begins when we saw our
                                                first full moon in the sky. It is truly a magnificent
                                                view even to the naked eye. If the night is clear, you
                                                can see amazing detail of the lunar surface just star
                                                gazing on in your back yard.
              </p>
                                        </div>
                                    </div>
                                    {/*Accordion item*/}
                                </div>
                            </div>
                            <div className="col-lg-5 feedback-right relative d-flex justify-content-center align-items-center">
                                <div className="overlay overlay-bg" />
                                <a
                                    className="play-btn"
                                    href="https://www.youtube.com/watch?v=ARA0AxrnHdM"
                                >
                                    <img className="img-fluid" src="img/play-btn.png" alt />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
export default about 