import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { logout } from "../services/auth";
// components/AddThing.js
import React, { Component } from "react";
import axios from "axios";

// import the service file since we need it to send (and get) the data to(from) server
import service from "../api/service";

class Picture extends Component {
  state = {
    imageUrl: "",
  };

  // this method handles just the file upload
  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    service
      .handleUpload(uploadData, this.props.user._id)
      .then((response) => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ imageUrl: response.secure_url });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    service
      .createEvent(this.state)
      .then((res) => {
        console.log("added: ", res);
        // here you would redirect to some other page
      })
      .catch((err) => {
        console.log("Error while adding the thing: ", err);
      });

    axios
      .post("/api/upload", {
        imageUrl: this.state.imageUrl,
      })
      .then(() => {
        console.log("IMAGE AFTER", this.state.imageUrl);
        this.setState({
          imageUrl: "",
        });
        this.props.history.push("./upload");
      });
    /*
      .then(() => {
        this.setState({ redirect: "/upload" });
      });
      */
  };

  // this method submits the form
  /*handleSubmit = (e) => {
    e.preventDefault();

    service
      .saveNewThing(this.state)
      .then((res) => {
        console.log("added: ", res);
        // here you would redirect to some other page
      })
      .catch((err) => {
        console.log("Error while adding the thing: ", err);
      });
  }; */

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
        <div>
          <Navbar />
          <div className="max-width" >
          <div className="grid-layout my-5 container">
            <div className="grid-three bg-white p-2 ">
              <h2>
                <i class="fas fa-user my-1"></i> Settings
              </h2>
              <ul className="flex-smart ">
                <li>
                  <Link to="/profile" className="btn my-1 btn-width">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/languages" className="btn my-1 btn-width">
                    Languages
                  </Link>
                </li>
                <li>
                  <Link to="/upload" className="btn my-1 btn-width ">
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
                      Logout
                    </Link>
                  </li>
                </li>
              </ul>
            </div>

            <section className=" grid-four bg-white">
              <div className="form-group">
                <h2 class="large text-primary center p-2 ">
                  Upload your Picture
                </h2>
                <form className="form message-form ">
                  <img
                    className="img-profile m-3"
                    src={this.props.user.imageUrl}
                    alt=""
                  />
                  <input
                    classname="btn"
                    type="file"
                    id="image"
                    name="iage"
                    onChange={(e) => this.handleFileUpload(e)}
                  />
                  <button className="btn btn-primary m-3" type="submit">
                    <h3>Submit changes</h3>
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Picture;
