import React from "react";
import { useState } from "react";
import SmallNav from "../../components/smallNav";

function BjtCeOutput() {
  const [r_base, setR_base] = useState();
  const [r_collector, setR_collector] = useState();
  const [ampe, setAmpb] = useState();
  const [ampc, setAmpc] = useState();
  const [voltbe, setVoltbe] = useState();
  const [voltcb, setVoltce] = useState();

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
  var vbe, vce, ib, ic, ibToNum, vbeToNum, icToNum, vceToNum;
  function run() {
    let base_res = r_base;
    vbe = base_res * 0.02;
    ib = 10 * Math.exp(vbe / 0.7);

    ibToNum = ib.toPrecision(4);
    vbeToNum = vbe.toPrecision(4);
    let collector_res = r_collector;

    vce = collector_res * 0.1;
    ic =
      (parseFloat(ib) *
        Math.sqrt(parseFloat(ib)) *
        (Math.exp(parseFloat(vce)) - Math.exp(-parseFloat(vce)))) /
      (Math.exp(parseFloat(vce)) + Math.exp(-parseFloat(vce))); //mili ampere

    icToNum = parseFloat(ic).toPrecision(4);
    vceToNum = vce.toPrecision(4);

    setAmpc(icToNum);
    setAmpb(ibToNum);
    setVoltbe(vbeToNum);
    setVoltce(vceToNum);
  }
  function clear() {
    setR_base(0);
    setR_collector(0);
    setAmpb(0);
    setAmpc(0);
    setVoltbe(0);
    setVoltce(0);
  }
  return (
    <div className="bjt-ce-in">
      <SmallNav
        head={"BJT Common Emmiter Output Characteristic"}
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
          value={r_collector}
          className="bjt-ce-2-inp"
          placeholder="Rh2"
        />
        <input
          type="text"
          disabled={true}
          value={ampe}
          className="bjt-ce-3-out"
          placeholder="Ie"
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
          value={voltcb}
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

export default BjtCeOutput;
