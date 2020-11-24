import React from "react";
import ExperimentCard from "../components/experimentCard";
import SmallNav from "../components/smallNav";

export default function BjtEmitter() {
  return (
    <div className="pn-junction">
      <SmallNav head={"BJT Common Base Characteristics"} link={"/bjt"} />

      <div style={{ width: "70%" }}>
        <ExperimentCard
          name={"BJT Common Emitter Output Charateristics"}
          link={"bjt-ce-out"}
        />
        <ExperimentCard
          name={"BJT Common Emitter Input Characteristics"}
          link={"bjt-ce-in"}
        />
      </div>
    </div>
  );
}
