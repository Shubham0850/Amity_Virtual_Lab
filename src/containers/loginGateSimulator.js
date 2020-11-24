import React, { useState, useEffect } from "react";
import "./style.css";
import SmallNav from "../components/smallNav";
import or from "../images/or.png";
import and from "../images/and.png";
import xor from "../images/xor.png";
import nor from "../images/nor.png";
import nand from "../images/nand.png";
import xnor from "../images/xnor.png";
import { NOR, OR, XOR, XNOR, NAND, AND } from "./logic";
import norTruth from "../images/not-truth.png";
import andTruth from "../images/and-truth.png";
import nandTruth from "../images/nand-truth.png";
import xorTruth from "../images/xor-truth.png";
import orTruth from "../images/or-truth.png";
import xnorTruth from "../images/xnor-truth.png";
import bg from "../images/experiment-bg.gif";

export default function LogicGateSimulator() {
  const [img, setImg] = useState("NOR");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(1);

  const aChange = () => {
    if (a === 0) {
      setA(1);
    } else {
      setA(0);
    }
  };

  const bChange = () => {
    if (b === 0) {
      setB(1);
    } else {
      setB(0);
    }
  };
  const handleChange = (e) => {
    setImg(e.target.value);
  };
  useEffect(() => {
    if (img === "NOR") {
      return setC(NOR(a, b));
    } else if (img === "OR") {
      return setC(OR(a, b));
    } else if (img === "XOR") {
      return setC(XOR(a, b));
    } else if (img === "XNOR") {
      return setC(XNOR(a, b));
    } else if (img === "NAND") {
      return setC(NAND(a, b));
    } else if (img === "AND") {
      return setC(AND(a, b));
    }
  }, [a, b, handleChange]);

  return (
    <div className="logic-gate-simulator">
      <SmallNav head={"Logic Gate Simulator"} link={"/logic-gate"} />
      <img src={bg} alt="bg-animation" className="lab-bg ex-bg" />
      {/* Logic gate select different input */}
      <div className="simulator-div">
        <div className="select-logic">
          <h3>Select Logic Gate</h3>
          <select onChange={handleChange}>
            <option value="NOR">NOR</option>
            <option value="OR">OR</option>
            <option value="XNOR">XNOR</option>
            <option value="XOR">XOR</option>
            <option value="NAND">NAND</option>
            <option value="AND">AND</option>
          </select>
        </div>
        {/* Image div of logic gate */}
        <div className="gate-img-div">
          {img === "NOR" && (
            <div className="logic-img">
              <div className="logic-input">
                <h1>A = {a}</h1>
                <button onClick={aChange}>Change</button>
                <h1>B = {b}</h1>
                <button onClick={bChange}>Change</button>
              </div>
              <img src={nor} alt="nor-gate-img" className="gate-img" />
              <div className="logic-output">
                <h1>C = {c}</h1>
              </div>
            </div>
          )}
          {img === "OR" && (
            <div className="logic-img">
              <div className="logic-input">
                <h1>A = {a}</h1>
                <button onClick={aChange}>Change</button>
                <h1>B = {b}</h1>
                <button onClick={bChange}>Change</button>
              </div>
              <img src={or} alt="nor-gate-img" className="gate-img" />
              <div className="logic-output">
                <h1>C = {c}</h1>
              </div>
            </div>
          )}
          {img === "XNOR" && (
            <div className="logic-img">
              <div className="logic-input">
                <h1>A = {a}</h1>
                <button onClick={aChange}>Change</button>
                <h1>B = {b}</h1>
                <button onClick={bChange}>Change</button>
              </div>
              <img src={xnor} alt="nor-gate-img" className="gate-img" />
              <div className="logic-output">
                <h1>C = {c}</h1>
              </div>
            </div>
          )}
          {img === "XOR" && (
            <div className="logic-img">
              <div className="logic-input">
                <h1>A = {a}</h1>
                <button onClick={aChange}>Change</button>
                <h1>B = {b}</h1>
                <button onClick={bChange}>Change</button>
              </div>
              <img src={xor} alt="nor-gate-img" className="gate-img" />
              <div className="logic-output">
                <h1>C = {c}</h1>
              </div>
            </div>
          )}
          {img === "NAND" && (
            <div className="logic-img">
              <div className="logic-input">
                <h1>A = {a}</h1>
                <button onClick={aChange}>Change</button>
                <h1>B = {b}</h1>
                <button onClick={bChange}>Change</button>
              </div>
              <img src={nand} alt="nor-gate-img" className="gate-img" />
              <div className="logic-output">
                <h1>C = {c}</h1>
              </div>
            </div>
          )}
          {img === "AND" && (
            <div className="logic-img">
              <div className="logic-input">
                <h1>A = {a}</h1>
                <button onClick={aChange}>Change</button>
                <h1>B = {b}</h1>
                <button onClick={bChange}>Change</button>
              </div>
              <img src={and} alt="nor-gate-img" className="gate-img" />
              <div className="logic-output">
                <h1>C = {c}</h1>
              </div>
            </div>
          )}
        </div>
        {/* Turth table div */}
        <div className="truth-table-div">
          <h3>Truth Table</h3>
          {img === "NOR" && (
            <img src={norTruth} alt="nor-truth-table" className="truth-img" />
          )}
          {img === "OR" && (
            <img src={orTruth} alt="nor-truth-table" className="truth-img" />
          )}
          {img === "AND" && (
            <img src={andTruth} alt="nor-truth-table" className="truth-img" />
          )}
          {img === "NAND" && (
            <img src={nandTruth} alt="nor-truth-table" className="truth-img" />
          )}
          {img === "XNOR" && (
            <img src={xnorTruth} alt="nor-truth-table" className="truth-img" />
          )}
          {img === "XOR" && (
            <img src={xorTruth} alt="nor-truth-table" className="truth-img" />
          )}
        </div>
      </div>
      {/*  */}
    </div>
  );
}
