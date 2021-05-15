import React, { Component } from "react";
import { Link } from "react-router-dom";
import Picture from "./mochup-2.png";
import Footer from "./layout/Footer";
export default class AboutPapagei extends Component {
  render() {
    return (
      <section class="m-top-landing max-width-landing ">
        <section class="grid-container max-width-landing ">
          <div class="reg ">
            <h1> Start talking to native speakers</h1>
            <Link to="/signup" className="   btn btn-light my-3 flex-smart">
              register for free
            </Link>
          </div>
          <div class="pic ">
            <img src={Picture} alt="papagei" />
          </div>
        </section>
        <Footer />
      </section>
    );
  }
}
