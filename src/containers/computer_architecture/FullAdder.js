import React, { useState } from "react";
import "./fulladder.css";
import SmallNav from "../../components/smallNav";
function FullAdder() {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [inputC, setInputC] = useState(0);
  const [sum, setSum] = useState();
  const [carry, setCarry] = useState();
  function changeinputA() {
    if (inputA == 0) {
      setInputA(1);
    } else {
      setInputA(0);
    }
  }
  function changeinputB() {
    if (inputB == 0) {
      setInputB(1);
    } else {
      setInputB(0);
    }
  }
  function changeinputC() {
    if (inputC == 0) setInputC(1);
    else {
      setInputC(0);
    }
  }

  function FullAdder() {
    let OutputSum, OutputCarry;
    if (inputA == 0 && inputB == 1 && inputC == 1) {
      OutputSum = 0;
      OutputCarry = 1;
    } else {
      OutputSum = Math.abs(inputA - inputB - inputC);
      OutputCarry = inputA * inputB + inputC * Math.abs(inputA - inputB);
    }

    setSum(OutputSum);
    setCarry(OutputCarry);
  }
  function clear() {
    setInputB(0);
    setInputC(0);
    setInputA(0);
    setSum(0);
    setCarry(0);
  }
  return (
    <div>
              
      <SmallNav head={"Full-Adder"} link={"/computer"} />
      <div>
        <button onClick={FullAdder} id="c9">
          {" "}
          Run
        </button>
        <button onClick={clear} id="c10">
          {" "}
          Clear
        </button>
        <div class="zz">
            
          <input id="c1" type="text" value={inputA} />
                  
          <input id="c2" type="text" value={inputB} />
                  
          <input id="c3" type="text" value={inputC} />
                 
          <input id="c4" type="text" value={sum} />
                  
          <input id="c5" type="text" value={carry} />
           
          <button onClick={changeinputA} id="c6">
            First{" "}
          </button>
                  
          <button onClick={changeinputB} id="c7">
            {" "}
            Second
          </button>
                  
          <button onClick={changeinputC} id="c8">
            {" "}
            Third{" "}
          </button>
        </div>
      </div>{" "}
                           
    </div>
  );
}

export default FullAdder;
