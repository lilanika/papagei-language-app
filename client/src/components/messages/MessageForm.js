import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import axios from "axios";

//import UsersList from './UsersList'

export default class MessageForm extends Component {
  state = {
    //sender: this.props.user,
    recipient: null,
    content: "",
  };

  handleChange = (event) => {
    console.log("Event target", event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    this.getUserDetails();
  }

  getUserDetails = () => {
    const { id } = this.props.match.params;
    console.log("USER RECEPIENT", id);
    axios
      .get(`/api/users/${this.props.match.params.id}`)

      .then((response) => {
        console.log("ICI reponse", response);
        this.setState({
          recipient: response.data,
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

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`/api/message`, {
        recipient: this.state.recipient._id,
        content: this.state.content,
      })
      .then(() => {
        this.props.history.push("/messages");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("CURRENT USER", this.props.user);
    console.log("RECEPIENT", this.state.recipient);

    if (this.state.recipient) {
      return (
        <div className="max-width" >
          <Navbar />
          <div className="max-width" >
          <section class="grid-layout my-5 container">
            <div className=" profile-button ">
              <Link to="/" className=" btn btn-light button ">
                Back To Profiles
              </Link>
            </div>

            <div className="grid-layout ">
              <div className="grid-three bg-dark p-2 ">
                <img
                  className="img-profile m-3"
                  src={this.state.recipient.imageUrl}
                  alt=""
                />
              </div>

              <section className=" grid-four bg-white">
                <div className="form-group">
                  <h2 class="large text-primary center p-2 ">
                    Write {this.state.recipient.name} a message
                  </h2>

                  <form className="form message-form " onSubmit={this.handleSubmit}>
                    <textarea
                      type="text"
                      rows="4"
                      name="content"
                      value={this.state.content}
                      onChange={this.handleChange}
                      id="content"
                      placeholder="Write you message here"
                    />
                    <button className="btn btn-primary m-2" type="submit">
                      <h3>Send message </h3>
                    </button>
                    {this.state.message && <h3>{this.state.message}</h3>}
                  </form>
                </div>
              </section>
            </div>
          </section>
        </div>
        </div>
      );
    } else {
      return <p>loading</p>;
    }
  }
}
