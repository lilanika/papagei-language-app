import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { signup } from "../services/auth";
import axios from "axios";
import { logout } from "../services/auth";
//import UsersList from './UsersList'

export default class Profile extends Component {
  state = {
    //...this.props.user
    //message: '',
    name: this.props.user.name,
    location: this.props.user.location,
    age: this.props.user.age,
    gender: this.props.user.gender,
    description: this.props.user.description,
    goal: this.props.user.goal,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log("STEP 0", event.target);
    this.setState({
      [name]: value,
    });
    console.log("STEP 1", this.state);
  };

  //axio put resquet with the dynamic id + setUser
  //  Edit profile
  // 1. Make a put request to smth like “/edit-profile”
  // 1. Make a put request to smith like “/user/:id”
  // 2. Update the user, and respond it, so the client can use the updated user information
  // 3. Set the updated user information to the state
  // 4. Set the updated user information to the parent component state
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Step 2");
    axios
      .put(`/api/user/${this.props.user._id}`, {
        name: this.state.name,
        location: this.state.location,
        age: this.state.age,
        gender: this.state.gender,
        description: this.state.description,
        goal: this.state.goal,
      })
      .then((response) => {
        console.log("RESPONSE", response.data);
        this.props.setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleLogout = () => {
    // event.preventDefault();
    logout().then(() => {
      this.props.setUser(null);
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
     
        <Navbar />
        <div className="max-width" >
        <div className="grid-layout my-5 container">
          <div className="grid-three bg-white p-2 ">
            <h2>
              <i class="fas fa-user my-1"></i> Settings
            </h2>
            <ul className="flex-smart">
              <li>
                <Link to="/profile" className="btn my-1 btn-width btn-smart ">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/languages" className="btn my-1 btn-width btn-smart">
                  Languages
                </Link>
              </li>
              <li>
                <Link to="/upload" className="btn my-1 btn-width btn-smart ">
                  Picture
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => this.handleLogout()}
                  className="btn my-1 btn-width btn-smart"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>

          <section className="grid-four bg-white p-2">
            <div className="form-group  ">
              <h2 class="large text-primary center p-3 ">Edit your Profile</h2>

              <form className="form message-form  form-text" onSubmit={this.handleSubmit}>
                <label className="grey " htmlFor="age ">
                  <p>change your name</p>
                </label>
                <label htmlFor="name"></label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  id="name"
                />
                <label className="grey" htmlFor="age ">
                  <p>change your location</p>
                </label>
                <select
                  name="location"
                  id="location"
                  form="carform"
                  onChange={this.handleChange}>
                  <option selected>{this.state.location}</option>
                  <option value="Berlin">Berlin</option>
                  <option value="Hamburg">Hamburg</option>
                  <option value="Köln">Köln</option>
                  <option value="Paris">Paris</option>
                  <option value="Grenoble">Grenoble</option>
                  <option value="London">London</option>
                  <option value="Barcelona">Barcelona</option>
                  <option value="Rome">Rome</option>
                  <option value="Poznan">Poznan</option>
                  <option value="Amsterdam">Amsterdam</option>
                </select>

                <label className="grey" htmlFor="age ">
                  <p>Choose your age</p>
                </label>
                <input
                  type="number"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  id="age"
                  min="16"
                  max="100"
                />

                <label className="grey" htmlFor="goal">
                  Edit decription
                </label>
                <textarea
                  type="text"
                  rows="5"
                  cols="30"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  id="description"
                />
                <label htmlFor="goal" className="grey">
                  Edit your learning Goals
                </label>
                <textarea
                  type="text"
                  rows="5"
                  cols="30"
                  name="goal"
                  value={this.state.goal}
                  onChange={this.handleChange}
                />

                <button className="btn btn-primary m-3" type="submit">
                  <h3>Submit changes </h3>
                </button>
                {this.state.message && <h3>{this.state.message}</h3>}
              </form>

              <Link
                to={`/users/${this.props.user._id}`}
                className="btn btn-dark my-2" >
                View Profile
              </Link>
            </div>
          </section>
        </div>
        </div>
      </div>
    );
  }
}
