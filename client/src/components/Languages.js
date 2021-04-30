import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { signup } from "../services/auth";
import axios from "axios";
import { logout } from "../services/auth";
import Footer from './layout/Footer'

export default class Languages extends Component {
  state = {
    nativeLanguages: this.props.user.nativeLanguages,
    learningLanguages: this.props.user.learningLanguages,
  };

  handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Step 2");
    axios
      .put(`/api/user/${this.props.user._id}`, {
        nativeLanguages: this.state.nativeLanguages,
        learningLanguages: this.state.learningLanguages,
      })
      .then((response) => {
        console.log("RESPONSE", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleLogout = () => {
    logout().then(() => {
      this.props.setUser(null);
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="max-width">
        <div className="grid-layout my-5 container">
          <div className="grid-three bg-white p-2 ">
            <h2>
                <i class="fas fa-user my-1"></i> Settings
              </h2>
              <ul className="flex-smart ">
                <li>
                  <Link to="/profile" className="btn my-1 btn-width">
                  <i class="fas fa-cog p-icons-settings btn-width p-icons-settings"></i> 
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/languages" className="btn my-1 btn-width">
                  <i class="fas fa-comments p-icons-settings btn-width p-icons-settings"></i>
                    Languages
                  </Link>
                </li>
                <li>
                  <Link to="/upload" className="btn my-1 btn-width ">
                  <i class="fas fa-camera p-icons-settings btn-width p-icons-settings"></i>
                    Picture
                  </Link>
                </li>
                <li>
                  <li>
                    <Link
                      to="/"
                      onClick={() => this.handleLogout()}
                      className="btn my-1 btn-width"
                    >
                     <i class="fas fa-sign-out-alt p-icons-settings btn-width p-icons-settings"></i>
                      Logout
                    </Link>
                  </li>
                </li>
              </ul>
            </div>
          <section className=" grid-four bg-white p-2">
            <div className="form-group form-text">
              <h3 class="large text-primary center p-3">Edit Languages</h3>

              <form className="form message-form form-text" onSubmit={this.handleSubmit}>
                <label className="grey" htmlFor="goal">
                  native Language
                </label>

                <select
                  name="nativeLanguages"
                  id="nativeLanguages"
                  form="form"
                  onChange={this.handleChange}
                >
                  <option selected>{this.state.nativeLanguages}</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Italian">Italian</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Russian">Russian</option>
                  <option value="Polish">Polish</option>
                  <option value="Portuguese">Portuguese</option>
                </select>

                <label className="grey" htmlFor="goal">
                  learning Language
                </label>

                <select
                  name="learningLanguages"
                  id="learningLanguages"
                  form="form"
                  onChange={this.handleChange}
                >
                  <option selected>{this.state.learningLanguages}</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Italian">Italian</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Russian">Russian</option>
                  <option value="Polish">Polish</option>
                  <option value="Portuguese">Portuguese</option>
                </select>
                <button className="btn btn-primary m-3 focus" type="submit">
                  <h3>Submit changes </h3>
                </button>
                {this.state.message && <h3>{this.state.message}</h3>}
              </form>
            </div>
          </section>
        </div>
      
        </div>
      </div>
    );
  }
}
