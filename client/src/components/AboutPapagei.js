import React, { Component } from "react";
import { login } from "../services/auth";
import { Link } from "react-router-dom";
//import logo from './layout/parrot.png';
import Login from './Login';

export default class AboutPapagei extends Component {
  render() {
    return (
      <section >

      <section class="grid-container">
      <div class="grid-element-one">
      
        <h1 class=""> get into conversation with native speakers </h1>
        <Link to="/signup" className=" btn btn-dark m-2">
        register for free
      </Link>
      </div>

      <div class=" grid-element ">
  

    
        
        




      </div>
</section>
     
    </section>
   



      
 
    )
  }
}

