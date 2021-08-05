import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar ">
      <ul>
        
        <Link to="/">
          <h1>Papagei <span class="primary">.</span></h1>
        </Link>
      </ul>
      <ul class="nav">
        <li class="start">
          <Link to="/">Start </Link>
        </li>

        <div className="msg bg-blue ">
          <li>
            <Link to="/messages">
              <i class="fas fa-comments"></i>
            </Link>
          </li>
        </div>

        <li>
          <Link to="/profile">
            <i class="fas fa-user-circle profile-i"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
