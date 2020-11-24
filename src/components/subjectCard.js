import React from "react";
import "./style.css";

export default function SubjectCard(props) {
  return (
    <div className="subject-card">
      <a href={`/${props.class}`}>
        <div className={`new-subject-bg ${props.class}`}></div>
        <div className="subject-details">
          <h3>{props.name}</h3>
          <code>
            <em>by {props.teacher}</em>
          </code>
        </div>
      </a>
    </div>
  );
}
