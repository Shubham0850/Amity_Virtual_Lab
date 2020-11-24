import React, { useState } from "react";
import "./bjt-ce-in.css";
import SmallNav from "../../components/smallNav";

function BjtCeInput() {
  const [r_base, setR_base] = useState();
  const [r_collector, setR_collector] = useState();
  const [ampe, setAmpe] = useState();
  const [ampc, setAmpc] = useState();
  const [voltbe, setVoltbe] = useState();
  const [voltbc, setVolbc] = useState();
  var ie, ic;
  var vbe, vbc;
  var icToNum, vcbToNum, ieToNum, vbeToNum;
  function handleChangeR_base(e) {
    let changedR_base = e.target.value;
    setR_base(changedR_base);
  }
  function handleChangeR_collector(e) {
    let changedR_collector = e.target.value;
    setR_collector(changedR_collector);
  }
  if (r_base > 100 || r_collector > 100) {
    alert("Enter a value between 0 - 100");
    setR_base(0);
    setR_collector(0);
  }
  function run() {
    let base_res = r_base;
    vbe = base_res * 0.02;
    ie = 2 * Math.exp(parseFloat(vbe) / 0.7 - 1).toPrecision(4);
    ieToNum = parseFloat(ie).toPrecision(2);
    vbeToNum = vbe.toPrecision(4);
    let collector_res = r_collector;
    vbc = collector_res * 0.1;

    let vcb = 0.1 * collector_res;
    ic = parseFloat(ie) * Math.sqrt(ie) * Math.exp(parseFloat(vcb) / 0.7 - 1);
    icToNum = parseFloat(ic).toPrecision(2);
    vcbToNum = vbc.toPrecision(4);

    setAmpc(icToNum);
    setVolbc(vcbToNum);

    setAmpe(ieToNum);
    setVoltbe(vbeToNum);
  }
  function clear() {
    setR_base(0);
    setR_collector(0);
    setAmpe(0);
    setAmpc(0);
    setVoltbe(0);
    setVolbc(0);
  }

  return (
    <div className="bjt-ce-in">
      <SmallNav
        head={"BJT Common Emmiter Input Characteristic"}
        link={"/bjt-emitter"}
      />
      <div className="bjt-ce-in-bg-img-div">
        <input
          type="text"
          onChange={handleChangeR_base}
          value={r_base}
          placeholder="Rh1"
          className="bjt-ce-1-inp"
          autoFocus
        />
        <input
          type="text"
          onChange={handleChangeR_collector}
          placeholder="Rh2"
          value={r_collector}
          className="bjt-ce-2-inp"
        />
        <input
          type="text"
          disabled={true}
          value={ampe}
          placeholder="Ib"
          className="bjt-ce-3-out"
        />
        <input
          type="text"
          disabled={true}
          value={ampc}
          placeholder="Ic"
          className="bjt-ce-4-out"
        />
        <input
          type="text"
          disabled={true}
          value={voltbe}
          placeholder="Vbe"
          className="bjt-ce-5-out"
        />
        <input
          type="text"
          disabled={true}
          value={voltbc}
          placeholder="Vcb"
          className="bjt-ce-6-out"
        />
        <button onClick={run} className="bjt-btn-run">
          <h3>Run</h3>
        </button>
        <button onClick={clear} className="bjt-btn-clear">
          <h3>Clear</h3>
        </button>
      </div>
    </div>
  );
}

export default BjtCeInput;
