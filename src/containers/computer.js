import React from "react";
import "./style.css";
import SmallNav from "../components/smallNav";
import ComputerExperimentData from "../data/computerExperimentData";
import ExperimentCard from "../components/experimentCard";
import bg from "../images/circuits.jpg";
function createCard(data) {
  return (
    <ExperimentCard link={data.link} class={data.class} name={data.name} />
  );
}

export default function Computer(props) {
  return (
    <div className="computer-experiments">
      <img src={bg} alt="electronics-bg" className="bg-electronics" />
      <SmallNav head={"Computer Architecture"} link={"/lab"} />
      <h3>Introduction</h3>
      <p>
        Laboratory courses on hands-on experiments are integral parts of
        engineering education. The content of this website aims to provide a
        virtual laboratory platform for undergraduate Engineering students
        studying the course of Computer Architecture. Using this virtual
        laboratory platform, the students will be able to perform various
        experiments to supplement their theoretical understanding of computer
        architecture.
        <br />
        The main objective of the proposed virtual lab is to introduce students
        about the latest Computational Intelligence Tools ( also known as soft
        computing tools). The training of these tools will be useful to develop
        rigorous applications in the engineering domain.
      </p>
      <h3>Experiments</h3>
      <div className="computer-experiments-flex">
        {ComputerExperimentData.map(createCard)}
      </div>
    </div>
  );
}
