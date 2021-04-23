import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import axios from "axios";
import UsersList from "../UsersList";
//import UsersList from './UsersList'

export default class MessagesContainer extends Component {
  state = {
    messages: [],
    recipientIdforConversation: null,
    reply: "",
  };
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    const id = this.props.user._id;
    console.log("SENDER", id);
    axios
      .get(`/api/message/history`)
      .then((response) => {
        console.log("RESPONSE FRONTEND", response.data);
        this.setState({ messages: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleClick = (event) => {
    console.log("ICI", event.target);
    const { value } = event.target;
    this.setState({
      recipientIdforConversation: value,
    });
  };
  handleChange = (event) => {
    console.log("Event target", event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    console.log("STEP 1");
    event.preventDefault();
    axios
      .post(`/api/message`, {
        recipient: this.state.recipientIdforConversation,
        content: this.state.reply,
      })
      .then((response) => {
        this.getData();
        this.setState({ reply: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    console.log(this.state.messages);
    console.log("TEST TO GET MESSAGES", this.state.recipientIdforConversation);
    const id = this.props.user._id; //loggedin user id
    const unique = [];
    // messages will be replaced with this.state.messages
    const usernames = [
      ...this.state.messages.map((message) => message.recipient),
      ...this.state.messages.map((message) => message.sender),
    ];
    console.log(usernames);
    // id will be replaces with this.props.user._id -
    usernames.forEach((user) => {
      if (
        user._id !== id &&
        unique.filter((x) => x._id === user._id).length === 0
      ) {
        unique.push(user);
      }
    });
    console.log("Unique", unique);
    // clicked name is alice: show all messages where bob is sender
    // or recipient
    // this clickedId is in the state
    const clickedId = this.state.recipientIdforConversation;
    const filtered = this.state.messages.filter(
      (m) => m.recipient._id === clickedId || m.sender._id === clickedId
    );
    console.log("Filtered", filtered);
    const UsersList = unique.map((message) => {
      return (

        <div>
          <div key={message._id}>
            <button
              className="btn my-1 btn-width"
              value={message._id}
              onClick={this.handleClick}>
              {message.name}
            </button>
          </div>
        </div>
      );
    });
    const displayMessages = filtered.map((message) => {
      return (
        <div className="p">
          <p className="text-dark">
            <b>{message.sender.name}</b>
          </p>
          <p>{message.content}</p>
          <div class="line-light"></div>
        </div>
      );
    });

    if (this.state.recipientIdforConversation) {
      return (
        <div>
          <Navbar />
          <div className="grid-layout my-5 container">
            <div className="grid-three bg-white p-2 ">
              <h2>
                <i class="fas fa-user my-1"></i> Your Contacts
              </h2>
              <div className="flex-smart">{UsersList}
              </div>
            </div>

            <section className=" grid-four bg-white">

              <div className="form-group">
                <h2 class="large text-primary center p-2 ">messages</h2>
                <div className=" p-2 btn-light flexbox border">
                  <p>{displayMessages}</p>
                </div>

                <form
                  className="form message-form"
                  onSubmit={this.handleSubmit}
                   >
                  <textarea
                    type="text"
                    rows="5"
                    cols="10"
                    className="form-group"
                    name="reply"
                    value={this.state.reply}
                    onChange={this.handleChange}
                    id="reply"
                    placeholder="Write you message here"
                  />
                  <button className="btn btn-primary m-2" type="submit">
                    <h3>Send message </h3>
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      );
    } else {
      return (
        <div>
        
          <Navbar />

          <div className="grid-layout my-5 container">
            <div className="grid-three bg-white p-2 ">
              <h2>
                <i class="fas fa-user my-1"></i> Your Contacts
              </h2>
              <div className="flex-smart">{UsersList}</div>
            </div>

            <section className=" grid-four bg-white p-2">
              <div className="form-group">
                <h2 class="large text-primary center p-2 ">messages</h2>
                <p>{displayMessages}</p>
                <p className=" center p-2">
                  You don't have any message now, if you want you can contact a
                  tandem partner in the list
                </p>
              </div>
            </section>
          </div>
        </div>
      );
    }
  }
}
