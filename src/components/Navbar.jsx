import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/library-2.png";
import { RxHamburgerMenu } from "react-icons/rx";
function Navbar() {
  const [view, setView] = useState(false);

  return (
    <div className="navmain">
      <div className="main">
        <RxHamburgerMenu className="logo" onClick={() => setView(!view)} />
        <img className="image" src={logo} alt="" />
      </div>
      <ul className="list-1">
        <li>Home</li>

        <li>Books</li>
        <li>Contact</li>
      </ul>
      {view ? (
        <ul className="list-2">
          <li>Home</li>
          <li>Books</li>
          <li>Contact</li>
        </ul>
      ) : null}
      <ul className="list-3">
        <li>Home</li>
        <li>Books</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
