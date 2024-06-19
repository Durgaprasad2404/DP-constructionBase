import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./user.css";

function User() {
  return (
    <div className="userDetails">
      <div className="userContainer">
        <div className="userDp">
          <FaUser />
        </div>
        <div className="userbio">
          <h3 className="username">
            Hey &#128075;, <span className="userName">Demo</span>
          </h3>
          <p className="greetingMsg">Good To See You Here &#128525;</p>
          <Link to="/logout" className="userStatus">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default User;
