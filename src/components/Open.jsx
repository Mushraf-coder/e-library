import React from "react";
import "./Open.css";
import logo from "../assets/library-2.png";
import { Link } from "react-router-dom";
function Open() {
  return (
    <div>
      <div className="page-main">
        <img className="image-logo" src={logo} alt="" />
        <Link to={"/library"}>
          <button className="get-started">Get Started</button>
           </Link>
      </div>
    </div>
  );
}

export default Open;
