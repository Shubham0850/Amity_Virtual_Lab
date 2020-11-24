import React from "react";
import "./style.css";
import SmallNav from "../components/smallNav";
import bg from "../images/logic-gate-bg.gif";
import downloadIcon from "../images/down.png";
import videoIcon from '../images/video.png';

export default function LogicGate() {
  return (
    <div className="logic-gate">
      <SmallNav head={"Experiment"} link={"/electronics"} />
      <img
        src={bg}
        alt="logic-gate-bg"
        className="bg-electronics"
        width="300px"
      />
      <div className="logic-gate-div">
        <div className="experiment-details">
          <h3>Experiment Name</h3>
          <p>
            To verify the truth tables of NOT, OR, AND, NOR, NAND, XOR, XNOR
            gates.
          </p>
          <h3>About the experiment</h3>
          <p>
            A table of conduction states has been drawn up showing the state of
            each transistor in the circuit for all possible input conditions to
            verify the logic function performed. The direction of conduction of
            T1 can be in the forward or reverse mode so this should also be
            noted in the table. It can be seen from the table that the output
            goes LOW only when both inputs are HIGH which verifies the NAND
            function.
          </p>
          <h3>Theory</h3>
          <p>therory goes here</p>
          <h3>Procedure</h3>
          <p>procedure goes here</p>
          <h3>About the experiment</h3>
          <p>
            To verify the truth tables of NOT, OR, AND, NOR, NAND, XOR, XNOR
            gates.
          </p>
          <h3>About the experiment</h3>
          <p>
            A table of conduction states has been drawn up showing the state of
            each transistor in the circuit for all possible input conditions to
            verify the logic function performed. The direction of conduction of
            T1 can be in the forward or reverse mode so this should also be
            noted in the table. It can be seen from the table that the output
            goes LOW only when both inputs are HIGH which verifies the NAND
            function.
          </p>
          <p>
            A table of conduction states has been drawn up showing the state of
            each transistor in the circuit for all possible input conditions to
            verify the logic function performed. The direction of conduction of
            T1 can be in the forward or reverse mode so this should also be
            noted in the table. It can be seen from the table that the output
            goes LOW only when both inputs are HIGH which verifies the NAND
            function.
          </p>
        </div>
        <div className="experimets-btns">
          <div className="simulator-btn">
            <a href="/logic-gate-simulator">
              <button className="btn">
                <h4>Simulator</h4>
              </button>
            </a>
          </div>
          <button className="download-btn btn">
            <img src={downloadIcon} alt="download-btn" width="35px" />
            <h4>Download Experiment</h4>
          </button>
          <button className="download-btn btn">
            <img src={videoIcon} alt="download-btn" width="35px" />
            <h4>Watch Experiment</h4>
          </button>
        </div>
      </div>
    </div>
  );
}
