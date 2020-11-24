import React, { useState } from "react";
import "./half-sub.css";
import SmallNav from "../../components/smallNav";

function HalfSubstractor() {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [Borrow, setBorrow] = useState();
  const [diff, setDiff] = useState();
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
  function HalfSubstractor() {
    setDiff(Math.abs(inputA - inputB));
    if (inputA == 0 && inputB == 1) {
      setBorrow(1);
    } else {
      setBorrow(0);
    }
  }
  function clear() {
    setBorrow();
    setDiff();
    setInputA(0);
    setInputB(0);
  }
  return (
    <div>
      <SmallNav head={"Half-Subtractor"} link={"/computer"} />
      <div>
        <button onClick={HalfSubstractor} id="a7">
          {" "}
          Run
        </button>
        <button onClick={clear} id="a8">
          {" "}
          Clear
        </button>
                
        <div class="r">
                  
          <input id="a1" type="text" value={inputA} />
                  
          <input id="a2" type="text" value={inputB} />
          <input id="a3" type="text" value={Borrow} />
                  
          <input id="a4" type="text" value={diff} />
          <button onClick={changeInputA} id="a5">
            First{" "}
          </button>
           
          <button onClick={changeInputB} id="a6">
            {" "}
            Second
          </button>
        </div>
      </div>
    </div>
  );
}

export default HalfSubstractor;
