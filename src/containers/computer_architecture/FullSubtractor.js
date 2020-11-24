import React, { useState } from "react";
import "./full-subtractor.css";
import SmallNav from "../../components/smallNav";
function FullSubtractor() {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [inputC, setInputC] = useState(0);
  const [Borrow, setBorrow] = useState();
  const [diff, setDiff] = useState();

  function changeinputA() {
    if (inputA === 0) {
      setInputA(1);
    } else {
      setInputA(0);
    }
  }
  function changeinputB() {
    if (inputB === 0) {
      setInputB(1);
    } else {
      setInputB(0);
    }
  }
  function changeinputC() {
    if (inputC === 0) {
      setInputC(1);
    } else {
      setInputC(0);
    }
  }
  function FullSubtractor() {
    //for difference
    if (inputA === 0 && inputB === 1 && inputC === 1) {
      setDiff(0);
    } else {
      setDiff(Math.abs(inputA - inputB - inputC));
    }

    //for borrow
    let binputA = inputA;
    if (binputA === 0) {
      //not operation
      binputA = 1;
    } else {
      binputA = 0;
    }

    let di = Math.abs(inputA - inputB);
    if (di === 0) {
      //not operation
      di = 1;
    } else {
      di = 0;
    }
    setBorrow(binputA * inputB + di * inputC);
  }
  function clear() {
    setInputA(0);
    setInputB(0);
    setInputC(0);
    setBorrow(0);
    setDiff(0);
  }
  return (
    <div>
      <SmallNav head={"Full-Subtractor"} link={"/computer"} />
      <div>
        <button onClick={FullSubtractor} id="d9">
          {" "}
          Run
        </button>
        <button onClick={clear} id="d10">
          {" "}
          Clear
        </button>
        <div class="bac">
          <div>
                    
            <input id="d1" type="text" value={inputA} />
                    
            <input id="d2" type="text" value={inputB} />
                    
            <input id="d3" type="text" value={inputC} />
            <input id="d4" type="text" value={Borrow} />
                    
            <input id="d5" type="text" value={diff} />
            <button onClick={changeinputA} id="d6">
              First{" "}
            </button>
             
            <button onClick={changeinputB} id="d7">
              {" "}
              Second
            </button>
            <button onClick={changeinputC} id="d8">
              {" "}
              Third{" "}
            </button>
          </div>
        </div>
      </div>{" "}
                           
    </div>
  );
}

export default FullSubtractor;
