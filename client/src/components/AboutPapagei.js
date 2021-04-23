import React, { Component } from "react";
import { login } from "../services/auth";
import { Link } from "react-router-dom";

export default class AboutPapagei extends Component {
  render() {
    return (
      <section>
        <section class="showcase ">
          <div class="text m-2">
            <h1 class="large text-primary  ">Simply get into </h1>
            <h1  class="large text-primary "> conversation with native speakers </h1>
          </div>

          <div class=" m-2">
            <p>
              Since we believe that the best way to learn, progress and master a
              language is to exchange, we want to help you find your perfect
              tandem partner on our Papagei application.
            </p>

            <p >
              On our application you can find our community and filter users by
              your city and language choices.
            </p>

            <p>
              The application gives you the opportunity to contact each other to
              chat on the application or to meet in real life.
              This project was realized by Vero and Oriane in 1 week during the Ironhack bootcamp.
            </p>

   
          </div>

         


          <Link to="/signup" className=" btn btn-dark m-2">
            register for free
          </Link>
        </section>
        <div class="icons my-1">
           
           
          </div>
      </section>
    );
  }
}

