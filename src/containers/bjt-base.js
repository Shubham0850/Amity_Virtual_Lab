import React from "react";
import ExperimentCard from "../components/experimentCard";
import SmallNav from "../components/smallNav";

export default function BjtBase() {
  return (
    <div className="pn-junction">
      <SmallNav head={"BJT Common Base Characteristics"} link={"/bjt"} />

      <div style={{ width: "70%" }}>
        <ExperimentCard
          name={"BJT Common Base Output Charateristics"}
          link={"bjt-cb-out"}
        />
        <ExperimentCard
          name={"BJT Common Base Input Characteristics"}
          link={"bjt-cb-in"}
        />
      </div>
    </div>
  );
}
