import React, { useState } from "react";
import "./Dmulti.css";
import SmallNav from "../../components/smallNav";
function Demulti() {
  const [D0, setD0] = useState(0);
  const [D1, setD1] = useState(0);
  const [D2, setD2] = useState(0);
  const [D3, setD3] = useState(0);
  const [D4, setD4] = useState(0);
  const [D5, setD5] = useState(0);
  const [D6, setD6] = useState(0);
  const [D7, setD7] = useState(0);
  const [S0, setS0] = useState(0);
  const [S1, setS1] = useState(0);
  const [S2, setS2] = useState(0);
  const [I, setI] = useState(0);
  function handleChangeS0() {
    S0 == 0 ? setS0(1) : setS0(0);
  }
  function handleChangeS1() {
    S1 == 0 ? setS1(1) : setS1(0);
  }
  function handleChangeS2() {
    S2 == 0 ? setS2(1) : setS2(0);
  }
  function handleChangeI() {
    I == 0 ? setI(1) : setI(0);
  }
  function run() {
    var q0 = I == 1 && !S1 == 1 && !S0 == 1 && !S2 == 1;
    var q1 = I == 1 && !S1 == 1 && S0 == 1 && !S2 == 1;
    var q2 = I == 1 && S1 == 1 && !S0 == 1 && !S2 == 1;
    var q3 = I == 1 && S1 == 1 && S0 == 1 && !S2 == 1;
    var q4 = I == 1 && !S1 == 1 && !S0 == 1 && S2 == 1;
    var q5 = I == 1 && !S1 == 1 && S0 == 1 && S2 == 1;
    var q6 = I == 1 && S1 == 1 && !S0 == 1 && S2 == 1;
    var q7 = I == 1 && S1 == 1 && S0 == 1 && S2 == 1;

    q0 == true ? setD0(1) : setD0(0);
    q1 == true ? setD1(1) : setD1(0);
    q2 == true ? setD2(1) : setD2(0);
    q3 == true ? setD3(1) : setD3(0);
    q4 == true ? setD4(1) : setD4(0);
    q5 == true ? setD5(1) : setD5(0);
    q6 == true ? setD6(1) : setD6(0);
    q7 == true ? setD7(1) : setD7(0);
  }
  function clear() {
    setD0(0);
    setD1(0);
    setD2(0);
    setD3(0);
    setD4(0);
    setD5(0);
    setD6(0);
    setD7(0);
    setS0(0);
    setS1(0);
    setS2(0);
  }

  return (
    <div className="d-multi">
      <SmallNav head={"De-Multiplexer"} link={"/computer"} />
      <div className="d-multi-bg-img-div">
        <input
          type="text"
          value={I}
          className="d-multi-1"
          placeholder="I"
          autoFocus
        />
        <input
          type="text"
          value={S0}
          className="d-multi-2"
          placeholder="S0"
          autoFocus
        />
        <input
          type="text"
          value={S1}
          className="d-multi-3"
          placeholder="S1"
          autoFocus
        />
        <input
          type="text"
          value={S2}
          className="d-multi-4"
          placeholder="S2"
          autoFocus
        />
        <button onClick={handleChangeI} className="dmulti-btn-1">
          I
        </button>
        <button onClick={handleChangeS0} className="dmulti-btn-2">
          S0
        </button>
        <button onClick={handleChangeS1} className="dmulti-btn-3">
          S1
        </button>
        <button onClick={handleChangeS2} className="dmulti-btn-4">
          S2
        </button>

        <input type="text" value={D0} className="d-multi-5" autoFocus />
        <input type="text" value={D1} className="d-multi-6" autoFocus />
        <input type="text" value={D2} className="d-multi-7" autoFocus />
        <input type="text" value={D3} className="d-multi-8" autoFocus />
        <input type="text" value={D4} className="d-multi-9" autoFocus />
        <input type="text" value={D5} className="d-multi-10" autoFocus />
        <input type="text" value={D6} className="d-multi-11" autoFocus />
        <input type="text" value={D7} className="d-multi-12" autoFocus />

        <button onClick={run} className="dmulti-btn5-run">
          <h3>Run</h3>
        </button>
        <button onClick={clear} className="dmulti-btn6-clear">
          <h3>Clear</h3>
        </button>
      </div>
    </div>
  );
}

export default Demulti;
