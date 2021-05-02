import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";

const handleLogout = (props) => {
  logout().then(() => {
    props.setUser(null);
  });
};

export default function LandingPage(props) {
  console.log(props.user);
  return (
    <div>
      <ul>
        {/* If we have a logged in user -> show projects and logout otherwise show login and signup */}
        {props.user ? (
          <>
            <li>
              <Link to="/profile" onClick={() => handleLogout(props)}></Link>
            </li>
          </>
        ) : (
          <>
            <nav className="navbar">
              <ul>
                <img
                  className=" round-img png margin-y"
                  src="https://img.icons8.com/color/48/000000/parrot.png"
                  alt=""
                />{" "}
                <Link to="/">
                  <h1>Papagei</h1>
                </Link>
              </ul>
              <ul class="nav">
                <li>
                  <Link to="/signup" className="">
                    Signup
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="">
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
      </ul>
    </div>
  );
}
