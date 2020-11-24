import React from "react";
import SmallNav from "../components/smallNav";
import "./semester.css";
function Semester() {
  return (
    <div>
      <SmallNav head={"Semesters"} link={"/course"} />
      <div className="buttonGroup">
        <a href="/sem_one">
          <button className="btn__sem">Semester 1</button>
        </a>
        <a href="/sem2">
          <button className="btn__sem">Semester 2</button>
        </a>
        <a href="/lab">
          <button className="btn__sem"> Semester 3</button>
        </a>
      </div>
    </div>
  );
}

export default Semester;
