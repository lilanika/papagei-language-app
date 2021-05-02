import React, { Component } from "react";
import { login } from "../services/auth";
import { Link } from "react-router-dom";

import Login from './Login';
import Picture from './mochup-2.png'
import Footer from './layout/Footer';
export default class AboutPapagei extends Component {
  render() {
    return (
      <section class="m-landing max-width-landing ">
      <section class="grid-container max-width-landing ">
      <div class="reg ">
        <h1> Get into conversation with native speakers </h1>
        <Link to="/signup" className="   btn btn-light my-3 flex-smart">
        register for free
      </Link>
      </div>
      <div class="pic ">

      <img src={Picture} alt="papagei"/>
 
      </div>
</section>
<Footer/>
     
    </section>
   



      
 
    )
  }
}

