import React from "react";
import SmallNav from "../components/smallNav";
import "./course.css";
function Course() {
  return (
    <div>
      <SmallNav head={"Select Your Course"} link={"/"} />

      <div className="btn_container">
        <a href="/sem">
          <button className="button">Coumputer Science Engineering</button>
        </a>
        <a href="/ce">
          <button className="button">Civil Engineering</button>
        </a>
      </div>
    </div>
  );
}

export default Course;
