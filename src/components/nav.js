import React from "react";
import "./style.css";
import logo from "../images/logo.png";

export default function Nav() {
  return (
    <nav className="navbar flex">
      {/* Navigation bar logo div */}
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      {/* Navigation bar component list  */}
      <div className="nav-components">
        <ul className="flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/course">Labs</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
