import React, { useState } from "react";
import "./c.css";
import SmallNav from "../../components/smallNav";
function Halfadder() {
  const [inputA, setInputA] = useState("0");
  const [inputB, setInputB] = useState("0");
  const [sum, setSum] = useState("0");
  const [carry, setCarry] = useState("0");

  function changeInputA() {
    if (inputA == 0) {
      setInputA(1);
    } else {
      setInputA(0);
    }
  }
  function changeInputB() {
    if (inputB == 0) {
      setInputB(1);
    } else {
      setInputB(0);
    }
  }
  function halfAdder() {
    let a = inputA;
    let b = inputB;
    let outputSum, outputCarry;
    outputSum = Math.abs(a - b);
    outputCarry = a * b;
    setSum(outputSum);
    setCarry(outputCarry);
  }
  function clear() {
    setSum(0);
    setCarry(0);
    setInputA(0);
    setInputB(0);
  }

  return (
    <div>
      <SmallNav head={"Half-Adder"} link={"/computer"} />
      <div>
        <button onClick={halfAdder} id="b6">
          {" "}
          Run
        </button>
        <button onClick={clear} id="b7">
          Clear
        </button>
        <div class="p">
          <div>
            <input type="text" id="b2" value={inputA} />
            <input type="text" id="b3" value={inputB} />

            <input type="text" id="b8" value={carry} />
            <input id="b9" type="text" value={sum} />
            <button onClick={changeInputA} id="b4">
              First
            </button>
            <button onClick={changeInputB} id="b5">
              Second
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Halfadder;
