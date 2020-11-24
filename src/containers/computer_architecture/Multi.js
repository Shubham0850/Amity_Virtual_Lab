import React, { useState } from "react";
import "./multiplexer.css";
import SmallNav from "../../components/smallNav";
function Multi() {
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
  const [multiAnswer, setMultiAnswer] = useState(0);
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
    var y =
      (D0 == 1 && !S1 == 1 && !S0 == 1 && !S2 == 1) ||
      (D1 == 1 && !S1 == 1 && S0 == 1 && !S2 == 1) ||
      (D2 == 1 && S1 == 1 && !S0 == 1 && !S2 == 1) ||
      (D3 == 1 && S1 == 1 && S0 == 1 && !S2 == 1) ||
      (D4 == 1 && !S1 == 1 && !S0 == 1 && S2 == 1) ||
      (D5 == 1 && !S1 == 1 && S0 == 1 && S2 == 1) ||
      (D6 == 1 && S1 == 1 && !S0 == 1 && S2 == 1) ||
      (D7 == 1 && S1 == 1 && S0 == 1 && S2 == 1);

    y == true ? setMultiAnswer(1) : setMultiAnswer(0);
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
    <div>
      <SmallNav head={"Multiplexer"} link={"/computer"} />

      <div>
        <button onClick={run} id="ab">
          Run
        </button>
        <button onClick={clear} id="ba">
          Clear
        </button>
        <div class="pc">
          <button onClick={handleChangeD0} id="s1">
            D0
          </button>
          <button onClick={handleChangeD1} id="s2">
            D1
          </button>
          <button onClick={handleChangeD2} id="s3">
            D2
          </button>
          <button onClick={handleChangeD3} id="s4">
            D3
          </button>
          <button onClick={handleChangeD4} id="s5">
            D4
          </button>
          <button onClick={handleChangeD5} id="s6">
            D5
          </button>
          <button onClick={handleChangeD6} id="s7">
            D6
          </button>
          <button onClick={handleChangeD7} id="s8">
            D7
          </button>
          <button onClick={handleChangeS0} id="s9">
            S0
          </button>
          <button onClick={handleChangeS1} id="s10">
            S1
          </button>
          <button onClick={handleChangeS2} id="s11">
            S2
          </button>
          <input id="s12" type="text" value={D0} />
          <input id="s13" type="text" value={D1} />
          <input id="s14" type="text" value={D2} />
          <input id="s15" type="text" value={D3} />
          <input id="s16" type="text" value={D4} />
          <input id="s17" type="text" value={D5} />
          <input id="s18" type="text" value={D6} />
          <input id="s20" type="text" value={D7} />
          <input id="s19" type="text" value={S0} />
          <input id="s21" type="text" value={S1} />
          <input id="s22" type="text" value={S2} />
          <input id="s23" type="text" value={multiAnswer} />
        </div>
      </div>
    </div>
  );
}

export default Multi;
