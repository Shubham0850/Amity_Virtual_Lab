import React from "react";
import "./style.css";
import SubjectCard from "../components/subjectCard";
import semester_one from "../data/semester_one";
import bg from "../images/bg-circuit.jpg";
import SmallNav from "../components/smallNav";

function createCard(data) {
  return (
    <SubjectCard
      class={data.class}
      name={data.name}
      teacher={data.teacher}
      description={data.description}
    />
  );
}

export default function lab_first() {
  return (
    <div className="lab">
      <SmallNav head={"Semester 1"} link={"/sem"} />
      <img src={bg} alt="bg" className="lab-bg" />
      <div className="flex"> {semester_one.map(createCard)} </div>
    </div>
  );
}
