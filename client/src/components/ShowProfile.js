import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import axios from "axios";

//import UsersList from './UsersList'

export default class ShowProfile extends Component {
  state = {
    user: "",
  };

  componentDidMount() {
    this.getUserDetails();
  }

  getUserDetails = () => {
    const { id } = this.props.match.params;
    console.log("STEP 1", id);
    axios
      .get(`/api/users/${this.props.match.params.id}`)

      .then((response) => {
        console.log("ICI reponse", response);
        //const user = response.data;
        this.setState({
          user: response.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === 404) {
          // we have a 404 error
          this.setState({
            error: "Not found 🤷‍♀️🤷‍♂️",
          });
        }
      });
  };

  render() {
    console.log("STEP 1", this.props);
    console.log("STEP 2", this.state.user);
    return (
      <div>
        <Navbar />
        <section class="container">
          <Link to="/" className="btn btn-light">
            Back To Profiles
          </Link>

          <div class="grid-layout my-1">
            <div class="grid-one bg-primary p-2 ">
              <img
                className="img-profile"
                src={this.state.user.imageUrl}
                alt="profile-pic"
              />
              <h1 class="large">{this.state.user.name}</h1>
              <p class="lead">Lives in {this.state.user.location}</p>
              <Link
                to={`/users/${this.state.user._id}/message`}
                className="btn btn-light"
              >
                Message
              </Link>
            </div>

            <div class="grid-three bg-white p-2">
              <h2 class="text-dark"> {this.state.user.name} Speaks </h2>
              <h3>{this.props.user.nativeLanguages} </h3>
              <div></div>
              <h2 class="text-dark">{this.state.user.name} Learns </h2>
              <h3>{this.props.user.learningLanguages}</h3>
            </div>

            <div class="grid-four bg-white p-2">
              <h3> About {this.state.user.name}</h3>
              <p> {this.state.user.age} years old </p>
              <p>
                <strong>Description: </strong>
                {this.state.user.description}
              </p>
            </div>

            <div class="grid-two  bg-light p-2">
              <h2 class="text-primary ">Goals</h2>
              <p> {this.state.user.goal}</p>
              <div class="line"></div>
              <div class=" icons my-4">
                <Link>
                  <i class="fab fa-twitter fa-2x"></i>
                </Link>
                <Link>
                  <i class="fab fa-facebook fa-2x"></i>
                </Link>
                <Link>
                  <i class="fab fa-linkedin fa-2x"></i>
                </Link>
                <Link>
                  <i class="fab fa-instagram fa-2x"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
