import React from "react";
import "./style.css";
import icon from "../images/prev.webp";

export default function SmallNav(props) {
  return (
    <div className="small-nav">
      <a href={`${props.link}`} className="nav-icon flex">
        <img src={icon} alt="pre-icon" />
      </a>
      <h1 className="smallH">{props.head}</h1>
    </div>
  );
}
