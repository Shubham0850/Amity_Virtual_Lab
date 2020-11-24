import React, { useState } from "react";
import "./subfour.css";
import SmallNav from "../../components/smallNav";
function SubFour() {
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
  const [car, setCarry] = useState();

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

  function fourSub() {
    var a = (a) => {
      return a;
    };
    var xor = (b) => {
      if (b == 0) return 1;
      else return 0;
    };
    var carry = 0;
    var subtractor = (a, c) => {
      var b = xor(c);

      if (a == 0 && b == 0) {
        carry = 0;

        return 0;
      } else if (a == 0 && b == 1) {
        carry = 0;

        return 0;
      } else if (a == 1 && b == 0) {
        carry = 1;

        return 0;
      } else if (a == 1 && b == 1) {
        carry = 0;

        return 1;
      }
    };
    var s0 = subtractor(a(inputA0), inputB0);
    var s1 = subtractor(a(inputC0), inputD0);
    var s2 = subtractor(a(inputA1), inputB1);
    var s3 = subtractor(a(inputC1), inputD1);

    setOutputA(s0);
    setOutputB(s1);
    setOutputC(s2);
    setOutputD(s3);
    setCarry(carry);
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
  }

  return (
    <div>
      <SmallNav head={"Four Bit Subtractor"} link={"/computer"} />
            
      <button id="btn569" onClick={fourSub}>
        {" "}
        Run
      </button>
            
      <button id="btn5610" onClick={clear}>
        {" "}
        Clear
      </button>
      <div class="hell">
                     
        <input id="int1" type="text" value={inputA0} />
              
        <input id="int2" type="text" value={inputB0} />
              
        <input id="int3" type="text" value={inputC0} />
              
        <input id="int4" type="text" value={inputD0} />
              
        <input id="int5" type="text" value={inputA1} />
              
        <input id="int6" type="text" value={inputB1} />
              
        <input id="int7" type="text" value={inputC1} />
              
        <input id="int8" type="text" value={inputD1} />
                 {" "}
        <button id="btn561" onClick={changeinputA0}>
          {" "}
          A1{" "}
        </button>
                      
        <button id="btn562" onClick={changeinputB0}>
          {" "}
          A2
        </button>
                      
        <button id="btn563" onClick={changeinputC0}>
          {" "}
          A3{" "}
        </button>
                      
        <button id="btn564" onClick={changeinputD0}>
          {" "}
          A4
        </button>
                      
        <button id="btn565" onClick={changeinputA1}>
          {" "}
          B1{" "}
        </button>
                      
        <button id="btn566" onClick={changeinputB1}>
          {" "}
          B2
        </button>
                      
        <button id="btn567" onClick={changeinputC1}>
          {" "}
          B3{" "}
        </button>
                      
        <button id="btn568" onClick={changeinputD1}>
          {" "}
          B4
        </button>
              
        <input id="int9" type="text" value={outputA} />
              
        <input id="int10" type="text" value={outputB} />
              
        <input id="int11" type="text" value={outputC} />
        <input id="int12" type="text" value={outputD} />
                                    
        <input id="int13" type="text" value={car} />
            
      </div>
    </div>
  );
}

export default SubFour;
