import React, { useState } from "react";
import "./decoder.css";
import SmallNav from "../../components/smallNav";
function Decoder() {
  const [Q0, setQ0] = useState(0);
  const [Q1, setQ1] = useState(0);
  const [Q2, setQ2] = useState(0);
  const [Q3, setQ3] = useState(0);
  const [Q4, setQ4] = useState(0);
  const [Q5, setQ5] = useState(0);
  const [Q6, setQ6] = useState(0);
  const [Q7, setQ7] = useState(0);
  const [S0, setS0] = useState(0);
  const [S1, setS1] = useState(0);
  const [S2, setS2] = useState(0);
  function handleChangeS0() {
    S0 == 0 ? setS0(1) : setS0(0);
  }
  function handleChangeS1() {
    S1 == 0 ? setS1(1) : setS1(0);
  }
  function handleChangeS2() {
    S2 == 0 ? setS2(1) : setS2(0);
  }

  function run() {
    var q0 = !S2 == 1 && !S1 == 1 && !S0 == 1;
    var q1 = !S2 == 1 && !S1 == 1 && S0 == 1;
    var q2 = !S2 == 1 && S1 == 1 && !S0 == 1;
    var q3 = !S2 == 1 && S1 == 1 && S0 == 1;
    var q4 = S2 == 1 && !S1 == 1 && !S0 == 1;
    var q5 = S2 == 1 && !S1 == 1 && S0 == 1;
    var q6 = S2 == 1 && S1 == 1 && !S0 == 1;
    var q7 = S2 == 1 && S1 == 1 && S0 == 1;

    q0 == true ? setQ0(1) : setQ0(0);
    q1 == true ? setQ1(1) : setQ1(0);
    q3 == true ? setQ3(1) : setQ3(0);
    q2 == true ? setQ2(1) : setQ2(0);
    q4 == true ? setQ4(1) : setQ4(0);
    q5 == true ? setQ5(1) : setQ5(0);
    q6 == true ? setQ6(1) : setQ6(0);
    q7 == true ? setQ7(1) : setQ7(0);
  }
  function clear() {
    setQ0(0);
    setQ1(0);
    setQ2(0);
    setQ3(0);
    setQ4(0);
    setQ5(0);
    setQ6(0);
    setQ7(0);
    setS0(0);
    setS1(0);
    setS2(0);
  }

  return (
    <div>
      <SmallNav head={"Decoder"} link={"/computer"} />
      <div>
        <button onClick={run} id="aa">
          Run
        </button>
        <button onClick={clear} id="bb">
          Clear
        </button>
        <div class="w">
          <input id="f1" type="text" value={S0} />
          <input id="f2" type="text" value={S1} />
          <input id="f3" type="text" value={S2} />
          <button onClick={handleChangeS0} id="f4">
            S0
          </button>
          <button onClick={handleChangeS1} id="f5">
            S1
          </button>
          <button onClick={handleChangeS2} id="f6">
            S2
          </button>
          <input id="f7" type="text" value={Q0} />
          <input id="f8" type="text" value={Q1} />
          <input id="f9" type="text" value={Q2} />
          <input id="f10" type="text" value={Q3} />
          <input id="f11" type="text" value={Q4} />
          <input id="f12" type="text" value={Q5} />
          <input id="f13" type="text" value={Q6} />
          <input id="f14" type="text" value={Q7} />
        </div>
      </div>
    </div>
  );
}

export default Decoder;
