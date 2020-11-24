import React from "react";
import "./style.css";
import SmallNav from "../components/smallNav";
import CEExperimentData from "../data/CeExperimentData";
import ExperimentCard from "../components/experimentCard";
function createCard(data) {
  return (
    <ExperimentCard link={data.link} class={data.class} name={data.name} />
  );
}
function Ce() {
  return (
    <div className="computer-experiments">
      <SmallNav head={"Civil Engineering"} link={"/course"} />
      <h3>Introduction</h3>
      <p>
        Laboratory courses on hands-on experiments are integral parts of
        engineering education. The content of this website aims to provide a
        virtual laboratory platform for undergraduate Engineering students
        studying the course of Civil Engineering. Using this virtual laboratory
        platform, the students will be able to perform various experiments to
        supplement their theoretical understanding of civil engineering.
        <br />
        The main objective of the proposed virtual lab is to introduce students
        about the latest Computational Intelligence Tools ( also known as soft
        computing tools). The training of these tools will be useful to develop
        rigorous applications in the engineering domain.
      </p>
      <h3>Experiments</h3>
      <div className="computer-experiments-flex">
        {CEExperimentData.map(createCard)}
      </div>
    </div>
  );
}

export default Ce;
