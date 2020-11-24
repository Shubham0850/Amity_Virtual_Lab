import React from "react";
import "./style.css";
import SubjectCard from "../components/subjectCard";
import SubjectData from "../data/subjectData";
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

export default function Lab() {
  return (
    <div className="lab">
      <SmallNav head={"Semester 3"} link={"/sem"} />
      <img src={bg} alt="bg" className="lab-bg" />
      <div className="flex"> {SubjectData.map(createCard)} </div>
    </div>
  );
}
