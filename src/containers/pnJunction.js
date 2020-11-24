import React from "react";
import ExperimentCard from "../components/experimentCard";
import SmallNav from "../components/smallNav";
import "./pn.css";

export default function PnJunction() {
  return (
    <div className="pn-junction">
      <SmallNav link={"/electronics"} head={"P-N Junction"} />
      <div style={{ width: "70%" }}>
        <ExperimentCard name={"Forward-bias"} link="forward-bias" />
        <ExperimentCard name={"Reverse-bias"} link="reverse-bias" />
      </div>
    </div>
  );
}
