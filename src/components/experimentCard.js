import React from "react";
import "./style.css";

export default function ExperimentCard(props) {
  return (
    <div className="experiment-card">
      <a href={`/${props.link}`}>
        {/* <div className={`subject-bg ${props.class}`}></div> */}
        <div className="subject-details">
          <p>{props.name}</p>
        </div>
      </a>
    </div>
  );
}
