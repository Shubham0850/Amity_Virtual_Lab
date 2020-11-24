import React, { useState } from "react";
import "./four-bit-adder.css";
import SmallNav from "../../components/smallNav";
function FourbitAdder() {
  const [inputA0, setInputA0] = useState(0);
  const [inputB0, setInputB0] = useState(0);
  const [inputC0, setInputC0] = useState(0);
  const [inputD0, setInputD0] = useState(0);
  const [inputA1, setInputA1] = useState(0);
  const [inputB1, setInputB1] = useState(0);
  const [inputC1, setInputC1] = useState(0);
  const [inputD1, setInputD1] = useState(0);
  const [outputA, setOutputA] = useState();
  const [outputB, setOutputB] = useState();
  const [outputC, setOutputC] = useState();
  const [outputD, setOutputD] = useState();
  const [carry, setCarry] = useState();

  function changeinputA0() {
    if (inputA0 == 0) {
      setInputA0(1);
    } else {
      setInputA0(0);
    }
  }
  function changeinputB0() {
    if (inputB0 == 0) {
      setInputB0(1);
    } else {
      setInputB0(0);
    }
  }
  function changeinputC0() {
    if (inputC0 == 0) {
      setInputC0(1);
    } else {
      setInputC0(0);
    }
  }
  function changeinputD0() {
    if (inputD0 == 0) {
      setInputD0(1);
    } else {
      setInputD0(0);
    }
  }
  function changeinputA1() {
    if (inputA1 == 0) {
      setInputA1(1);
    } else {
      setInputA1(0);
    }
  }
  function changeinputB1() {
    if (inputB1 == 0) {
      setInputB1(1);
    } else {
      setInputB1(0);
    }
  }
  function changeinputC1() {
    if (inputC1 == 0) {
      setInputC1(1);
    } else {
      setInputC1(0);
    }
  }
  function changeinputD1() {
    if (inputD1 == 0) {
      setInputD1(1);
    } else {
      setInputD1(0);
    }
  }

  function fourAdder() {
    let emitter = (collector, base) => (base === 1 ? collector : 0);

    let AND = (a, b, current = 1) => emitter(emitter(current, a), b);

    let OR = (a, b, current = 1) =>
      Math.min(emitter(current, a) + emitter(current, b), 1);

    let XOR = (a, b, current = 1) =>
      AND(a, b, current) === 1 ? 0 : OR(a, b, current);

    let halfAdder = (a, b) => ({
      SUM: XOR(a, b),
      CARRY: AND(a, b),
    });

    let fullAdder = (a, b, carry) => {
      const halfAdder1 = halfAdder(a, b);
      const halfAdder2 = halfAdder(halfAdder1.SUM, carry);
      return {
        SUM: halfAdder2.SUM,
        CARRY: OR(halfAdder1.CARRY, halfAdder2.CARRY),
      };
    };

    let output = [];

    output[4] = halfAdder(inputA0, inputA1);

    output[3] = fullAdder(inputB0, inputB1, output[4].CARRY);
    output[2] = fullAdder(inputC0, inputC1, output[3].CARRY);
    output[1] = fullAdder(inputD0, inputD1, output[2].CARRY);

    output[0] = output[1].CARRY;
    output[1] = output[1].SUM;
    output[2] = output[2].SUM;
    output[3] = output[3].SUM;
    output[4] = output[4].SUM;

    setCarry(output[0]);
    setOutputA(output[1]);
    setOutputB(output[2]);
    setOutputC(output[3]);
    setOutputD(output[4]);
  }
  function clear() {
    setInputA0(0);
    setInputB0(0);
    setInputC0(0);
    setInputD0(0);
    setInputA1(0);
    setInputB1(0);
    setInputC1(0);
    setInputD1(0);

    setOutputA(0);
    setOutputB(0);
    setOutputC(0);
    setOutputD(0);

    setCarry(0);
  }

  return (
    <div>
      <SmallNav head={"Four Bit Adder"} link={"/computer"} />

      <div>
        <button onClick={fourAdder} id="qq">
          {" "}
          Run
        </button>
        <button onClick={clear} id="pp">
          {" "}
          Clear
        </button>
        <div class="class">
          <input id="e1" type="text" value={inputA0} />
          <input id="e2" type="text" value={inputB0} />
          <input id="e3" type="text" value={inputC0} />
          <input id="e4" type="text" value={inputD0} />
          <input id="e5" type="text" value={inputA1} />
          <input id="e6" type="text" value={inputB1} />
          <input id="e7" type="text" value={inputC1} />
          <input id="e8" type="text" value={inputD1} />
             {" "}
          <button onClick={changeinputA0} id="e9">
            {" "}
            A1{" "}
          </button>
                  
          <button onClick={changeinputB0} id="e10">
            {" "}
            A2
          </button>
                  
          <button onClick={changeinputC0} id="e11">
            {" "}
            A3{" "}
          </button>
                  
          <button onClick={changeinputD0} id="e12">
            {" "}
            A4
          </button>
                  
          <button onClick={changeinputA1} id="e13">
            {" "}
            B1{" "}
          </button>
                  
          <button onClick={changeinputB1} id="e14">
            {" "}
            B2
          </button>
                  
          <button onClick={changeinputC1} id="e15">
            {" "}
            B3{" "}
          </button>
                  
          <button onClick={changeinputD1} id="e16">
            {" "}
            B4
          </button>
          <input id="e17" type="text" value={outputA} />
          <input id="e18" type="text" value={outputB} />
          <input id="e19" type="text" value={outputC} />
          <input id="e20" type="text" value={outputD} />
          <input id="e21" type="text" value={carry} />
        </div>
      </div>
    </div>
  );
}

export default FourbitAdder;
