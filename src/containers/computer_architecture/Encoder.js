import React, { useState } from "react";
import "./encoder.css";
import SmallNav from "../../components/smallNav";
function Encoder() {
  const [D0, setD0] = useState(0);
  const [D1, setD1] = useState(0);
  const [D2, setD2] = useState(0);
  const [D3, setD3] = useState(0);
  const [D4, setD4] = useState(0);
  const [D5, setD5] = useState(0);
  const [D6, setD6] = useState(0);
  const [D7, setD7] = useState(0);
  const [Q0, setQ0] = useState(0);
  const [Q1, setQ1] = useState(0);
  const [Q2, setQ2] = useState(0);
  function handleChangeD0() {
    D0 == 0 ? setD0(1) : setD0(0);
  }
  function handleChangeD1() {
    D1 == 0 ? setD1(1) : setD1(0);
  }
  function handleChangeD2() {
    D2 == 0 ? setD2(1) : setD2(0);
  }
  function handleChangeD3() {
    D3 == 0 ? setD3(1) : setD3(0);
  }
  function handleChangeD4() {
    D4 == 0 ? setD4(1) : setD4(0);
  }
  function handleChangeD5() {
    D5 == 0 ? setD5(1) : setD5(0);
  }
  function handleChangeD6() {
    D6 == 0 ? setD6(1) : setD6(0);
  }
  function handleChangeD7() {
    D7 == 0 ? setD7(1) : setD7(0);
  }
  function run() {
    var A0 = D1 == 1 || D3 == 1 || D5 == 1 || D7 == 1;
    var A1 = D2 == 1 || D3 == 1 || D6 == 1 || D7 == 1;
    var A2 = D4 == 1 || D5 == 1 || D6 == 1 || D7 == 1;

    A0 == true ? setQ0(1) : setQ0(0);
    A1 == true ? setQ1(1) : setQ1(0);
    A2 == true ? setQ2(1) : setQ2(0);
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
    setQ0(0);
    setQ1(0);
    setQ2(0);
  }

  return (
    <div>
      <SmallNav head={"Encoder"} link={"/computer"} />
      <div>
        <button onClick={run} id="aa">
          Run
        </button>
        <button onClick={clear} id="bb">
          Clear
        </button>
        <div class="s">
          <button onClick={handleChangeD0} id="k1">
            D0
          </button>
          <button onClick={handleChangeD1} id="k2">
            D1
          </button>
          <button onClick={handleChangeD2} id="k3">
            D2
          </button>
          <button onClick={handleChangeD3} id="k4">
            D3
          </button>
          <button onClick={handleChangeD4} id="k5">
            D4
          </button>
          <button onClick={handleChangeD5} id="k6">
            D5
          </button>
          <button onClick={handleChangeD6} id="k7">
            D6
          </button>
          <button onClick={handleChangeD7} id="k8">
            D7
          </button>
          <input id="k9" type="text" value={D0} />
          <input id="k10" type="text" value={D1} />
          <input id="k11" type="text" value={D2} />
          <input id="k12" type="text" value={D3} />
          <input id="k13" type="text" value={D4} />
          <input id="k14" type="text" value={D5} />
          <input id="k15" type="text" value={D6} />
          <input id="k16" type="text" value={D7} />
          <input id="k17" type="text" value={Q0} />
          <input id="k18" type="text" value={Q1} />
          <input id="k19" type="text" value={Q2} />
        </div>
      </div>
    </div>
  );
}

export default Encoder;
